import BrandModel from './BrandModel.model';
import BaseService from '../../common/BaseService';
import IAdapterOptions from '../../common/IAdapterOptions.interface';
import IAddBrand from './dto/IAddBrand.dto';
import IEditBrand from './dto/IEditBrand.dto';

interface IBrandAdapterOptions extends IAdapterOptions{
    loadModels: boolean;
}

const DefaultBrandAdapterOptions: IBrandAdapterOptions = {
    loadModels: false,
}

class BrandService extends BaseService<BrandModel, IBrandAdapterOptions> {
    tableName(): string {
        return "brand";
    }

    protected async adaptToModel(data: any, options: IBrandAdapterOptions=DefaultBrandAdapterOptions): Promise<BrandModel> {
        const brand: BrandModel = new BrandModel();

        brand.brandId = +data?.brand_id;
        brand.name = data?.name;
        brand.categoryId = data?.category_id;

        if(options.loadModels){
            brand.model = await this.services.model.getAllByBrandId(brand.brandId, {});
        }

        return brand;
    }

    public async getAllByCategoryId(categoryId: number , options: IBrandAdapterOptions=DefaultBrandAdapterOptions): Promise<BrandModel []> {
        return this.getAllByFieldNameAndValue('category_id', categoryId, options);
    }

    public async add(data: IAddBrand): Promise<BrandModel> {
        return this.baseAdd(data, DefaultBrandAdapterOptions);
    }

    public async editById(brandId: number, data: IEditBrand, options: IBrandAdapterOptions=DefaultBrandAdapterOptions):Promise <BrandModel> {
        return this.baseEditById(brandId, data, options);
    }
}

export default BrandService;
