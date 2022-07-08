import { LargeNumberLike } from "crypto";
import IModel from "../../common/IModel.inteface";

class AdModel implements IModel {


    //FKs:
    categoryId: number;
    brandId: number;
    modelId: number;
    userId: number;
}

export default AdModel;