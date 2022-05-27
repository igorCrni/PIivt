import BrandModel from './BrandModel.model';
import BaseService from '../../common/BaseService';
import IAdapterOptions from '../../common/IAdapterOptions.interface';
import { IAddCategoryServiceDto } from '../category/dto/IAddCategory.dto';

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

    public async add(data: IAddCategoryServiceDto): Promise<BrandModel> {
        return new Promise<BrandModel>((resolve, reject) => {
            const sql: string = "INSERT `brand` SET `name` = ?, `category_id` = ? ;"

            this.db.execute(sql, [ data.name, data.categoryId ])
                .then(async result => {
                    const info:any = result;

                    const newBrandId = +(info[0]?.insertId);

                    const newBrand: BrandModel|null = await this.getById(newBrandId, {});

                    if (newBrand === null) {
                        return reject({message: 'Duplicate brand name in this category!',});
                    }

                    resolve(newBrand);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

export default BrandService;
