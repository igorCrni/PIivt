import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import InteriorMaterialModel from './InteriorMaterialModel.model';

class InteriorMaterialAdapterOptions implements IAdapterOptions {

}

class InteriorMaterialService extends BaseService<InteriorMaterialModel, InteriorMaterialAdapterOptions> {
    tableName(): string {
        return "interior_material";
    }

    protected async adaptToModel(data: any): Promise<InteriorMaterialModel> {
        const interior_material: InteriorMaterialModel = new InteriorMaterialModel();

        interior_material.interiorMaterialId = +data?.interior_material_id;
        interior_material.name = data?.name;

        return interior_material;
    }
}

export default InteriorMaterialService;