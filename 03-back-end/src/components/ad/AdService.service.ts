import { resolve } from "path";
import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import { DevConfig } from "../../configs";
import AdModel from "./AdModel.model";
import IAddAd from "./dto/IAddAd.dto";
import IEditAd from "./dto/IEditAd.dto";

export interface IAdAdapterOptions extends IAdapterOptions {
    loadPhotos:boolean
}

export const DefaultAdAdapterOptions: IAdAdapterOptions = {
    loadPhotos:false
}

export default class AdService extends BaseService<AdModel, IAdAdapterOptions> {
    tableName(): string {
        return "ad";
    }

    protected async adaptToModel(data: any, options: IAdAdapterOptions=DefaultAdAdapterOptions): Promise<AdModel> {
        return new Promise(async (resolve) => {
            const ad: AdModel = new AdModel();

            ad.adId                 = +data?.ad_id;
            ad.categoryId           = +data?.category_id;
            ad.brandId              = +data?.brand_id;
            ad.modelId              = +data?.model_id;
            ad.userId               = +data?.user_id;
            ad.carBody              =  data?.car_body;
            ad.fuelType             =  data?.fuel_type;
            ad.drive                =  data?.drive;
            ad.transmission         =  data?.transmission;
            ad.doors                =  data?.doors;
            ad.seats                =  data?.seats;
            ad.steeringWheelSide    =  data?.steering_wheel_side;
            ad.airCondition         =  data?.air_condition;
            ad.damage               =  data?.damage;
            ad.origin               =  data?.origin;
            ad.safety               =  data?.safety;
            ad.equipment            =  data?.equipment;
            ad.vehicleCondition     =  data?.vehicle_condition;
            ad.emissionClass        =  data?.emission_class;
            ad.interiorMaterial     =  data?.interior_material;
            ad.replacement          =  data?.replacement;
            ad.title                =  data?.title;
            ad.price                =  data?.price;
            ad.fixed                =  data?.fixed;
            ad.year                 =  data?.year;
            ad.mark                 =  data?.mark;
            ad.cm3                  =  data?.cm3;
            ad.kw                   =  data?.kw;
            ad.ks                   =  data?.ks;
            ad.mileage              =  data?.mileage;
            ad.color                =  data?.color;
            ad.interiorColor        =  data?.interior_color;
            ad.registrationUntil    =  data?.registration_until;
            ad.description          =  data?.description;

            if (options.loadPhotos) {
                ad.photos = await this.services.photo.getAllByAdId(ad.adId);
            }

            resolve(ad);
        })
    }

    async getAllByCategoryId(categoryId: number,){
        return this.getAllByFieldNameAndValue("category_id", categoryId, DefaultAdAdapterOptions);
    }

    async getAllByBrandId(brandId:number,){
        return this.getAllByFieldNameAndValue("brand_id", brandId, DefaultAdAdapterOptions);
    }

    async getAllByModelId(modelId:number,){
        return this.getAllByFieldNameAndValue("model_id", modelId, DefaultAdAdapterOptions);
    }

    async add(data: IAddAd): Promise<AdModel> {
        return this.baseAdd(data, DefaultAdAdapterOptions);
    }

    public async editById(adId: number, data: IEditAd, options: IAdAdapterOptions):Promise <AdModel> {
        return this.baseEditById(adId, data, options);
    }

    async deleteById(adId: number): Promise<{ filesToDelete: string[] }> {
        return new Promise(resolve => {
            this.services.ad.getById(adId,DefaultAdAdapterOptions)
            .then(() => this.getById(adId, {
                loadPhotos: true
            }))
            .then(ad => {
                if (ad === null) throw { status: 404, message: "Ad not found!" }
                return ad;
            })
            .then(async ad => {
                const filesToDelete = ad.photos.map(photo => DevConfig.server.static.path + "/" + photo.filePath);

                for (let photo of ad.photos) {
                    await this.services.photo.deleteById(photo.photoId);
                }

                return filesToDelete;
            })
            .then(async filesToDelete => {
                await this.baseDeleteById(adId);
                return filesToDelete;
            })
            .then(filesToDelete => {
                resolve({
                    filesToDelete: filesToDelete,
                });
            })
            .catch(error => {
                throw {
                    message: error?.message ?? "Could not delete this ad!",
                }
            });
        })
    }
}