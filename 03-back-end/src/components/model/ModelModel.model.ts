import IModel from "../../common/IModel.inteface";

class ModelModel implements IModel{
    modelId: number;
    name: string;

    //FKs:
    brandId: number;
}

export default ModelModel;