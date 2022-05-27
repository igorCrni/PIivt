import IModel from "../../common/IModel.inteface";
import BrandModel from "../brand/BrandModel.model";

class CategoryModel implements IModel {
    categoryId: number;
    name: string;

    brand?: BrandModel[];
}

export default CategoryModel;