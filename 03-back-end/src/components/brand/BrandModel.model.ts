import IModel from "../../common/IModel.inteface";
import ModelModel from '../model/ModelModel.model';

class BrandModel implements IModel{
    brandId: number;
    name: string;

    //FKs:
    categoryId: number;

    model?: ModelModel[];
}

export default BrandModel;