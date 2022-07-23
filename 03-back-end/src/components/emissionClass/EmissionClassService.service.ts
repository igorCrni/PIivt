import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import EmissionClassModel from './EmissionClassModel.model';

class EmissionClassAdapterOptions implements IAdapterOptions {

}

class EmissionClassService extends BaseService<EmissionClassModel, EmissionClassAdapterOptions> {
    tableName(): string {
        return "emission_class";
    }

    protected async adaptToModel(data: any): Promise<EmissionClassModel> {
        const emission_class: EmissionClassModel = new EmissionClassModel();

        emission_class.emissionClassId = +data?.emission_class_id;
        emission_class.name = data?.name;

        return emission_class;
    }
}

export default EmissionClassService;