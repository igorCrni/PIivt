import { resolve } from "path";
import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import { DevConfig } from "../../configs";
import AdModel from "./AdModel.model";
import IAddAd from "./dto/IAddAd.dto";
import IEditAd from "./dto/IEditAd.dto";
import { IAdEquipment, IAdSafety, IAdVehicleCondition } from './dto/IAddAd.dto';

export interface IAdAdapterOptions extends IAdapterOptions {
    loadPhotos:boolean
    loadEquipments: boolean
    loadSafety: boolean
    loadVehicleCondition: boolean
}

export const DefaultAdAdapterOptions: IAdAdapterOptions = {
    loadPhotos:false,
    loadEquipments: false,
    loadSafety: false,
    loadVehicleCondition: false,
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
            ad.price                =  +data?.price;
            ad.year                 =  data?.year;
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
            if (options.loadEquipments) {
                ad.equipments = await this.services.equipment.getAllByAdId(ad.adId);
            }
            if (options.loadSafety) {
                ad.safeties = await this.services.safety.getAllByAdId(ad.adId);
            }
            if (options.loadVehicleCondition) {
                ad.vehicleConditions = await this.services.vehicleCondition.getAllByAdId(ad.adId);
            }

            resolve(ad);
        })
    }

    async getAllByCategoryId(categoryId: number, options: IAdAdapterOptions){
        return this.getAllByFieldNameAndValue("category_id", categoryId, options);
    }

    async getAllByUserId(userId: number, options: IAdAdapterOptions){
        return this.getAllByFieldNameAndValue("user_id", userId, options);
    }

    async getAllByBrandId(brandId:number, options: IAdAdapterOptions){
        return this.getAllByFieldNameAndValue("brand_id", brandId, options);
    }

    async getAllByModelId(modelId:number, options: IAdAdapterOptions){
        return this.getAllByFieldNameAndValue("model_id", modelId, options);
    }

    async add(data: IAddAd): Promise<AdModel> {
        return this.baseAdd(data, DefaultAdAdapterOptions);
    }

    async addAdEquipment(data:IAdEquipment): Promise<number> {
        return new Promise((resolve, reject) => {
            const sql: string = "INSERT ad_equipment SET ad_id = ?, equipment_id = ?;";

            this.db.execute(sql, [data.ad_id, data.equipment_id])
            .then(async result => {
                const info: any = result;
                resolve(+(info[0]?.insertId));
            })
            .catch(error => {
                reject(error);
            });
        })
    }
    async addAdSafety(data:IAdSafety): Promise<number> {
        return new Promise((resolve, reject) => {
            const sql: string = "INSERT ad_safety SET ad_id = ?, safety_id = ?;";

            this.db.execute(sql, [data.ad_id, data.safety_id])
            .then(async result => {
                const info: any = result;
                resolve(+(info[0]?.insertId));
            })
            .catch(error => {
                reject(error);
            });
        })
    }
    async addAdVehicleCondition(data:IAdVehicleCondition): Promise<number> {
        return new Promise((resolve, reject) => {
            const sql: string = "INSERT ad_vehicle_condition SET ad_id = ?, vehicle_condition_id = ?;";

            this.db.execute(sql, [data.ad_id, data.vehicle_condition_id])
            .then(async result => {
                const info: any = result;
                resolve(+(info[0]?.insertId));
            })
            .catch(error => {
                reject(error);
            });
        })
    }

    public async editById(adId: number, data: IEditAd, options: IAdAdapterOptions):Promise <AdModel> {
        return this.baseEditById(adId, data, options);
    }

    async deleteById(adId: number): Promise<{ filesToDelete: string[] }> {
        return new Promise(resolve => {
            this.services.ad.getById(adId,DefaultAdAdapterOptions)
            .then(() => this.getById(adId, {
                loadPhotos: true,
                loadEquipments: false,
                loadSafety: false,
                loadVehicleCondition: false
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