import BrandModel from './BrandModel.model';
import BaseService from '../../common/BaseService';
import IAdapterOptions from '../../common/IAdapterOptions.interface';
import IAddBrand from './dto/IAddBrand.dto';

class BrandAdapterOptions implements IAdapterOptions{

}

class BrandService extends BaseService<BrandModel, BrandAdapterOptions> {
    tableName(): string {
        return "brand";
    }

    protected async adaptToModel(data: any): Promise<BrandModel> {
        const brand: BrandModel = new BrandModel();

        brand.brandId = +data?.brand_id;
        brand.name = data?.name;
        brand.categoryId = data?.category_id;

        return brand;
    }

    public async getAllByCategoryId(categoryId: number , options: BrandAdapterOptions): Promise<BrandModel []> {
        return this.getAllByFieldNameAnValue('category_id', categoryId, options);
    }

    public async add(data: IAddBrand): Promise<BrandModel> {
        return this.baseAdd(data, {});
    }
}

export default BrandService;
