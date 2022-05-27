import IModel from "../../common/IModel.inteface";

class BrandModel implements IModel{
    brandId: number;
    name: string;

    //FKs:
    categoryId: number;
}

export default BrandModel;