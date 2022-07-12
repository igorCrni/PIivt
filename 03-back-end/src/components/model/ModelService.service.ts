import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import IAddModel from "./dto/IAddModel.dto";
import IEditModel from "./dto/IEditModel.dto";
import ModelModel from './ModelModel.model';

class ModelAdapterOptions implements IAdapterOptions {

}

class ModelService extends BaseService<ModelModel, ModelAdapterOptions> {
    tableName(): string {
        return "model";
    }

    protected async adaptToModel(data: any): Promise<ModelModel> {
        const model: ModelModel = new ModelModel();

        model.modelId = +data?.model_id;
        model.name = data?.name;
        model.brandId = data?.brand_id;

        return model;
    }

    public async getAllByBrandId(brandId: number , options: ModelAdapterOptions): Promise<ModelModel []> {
        return this.getAllByFieldNameAndValue('brand_id', brandId, options);
    }

    public async add(data: IAddModel): Promise<ModelModel>{
        return this.baseAdd(data, {});
    }

    public async editById(modelId: number, data: IEditModel):Promise <ModelModel> {
        return this.baseEditById(modelId, data, {});
    }
}

export default ModelService;