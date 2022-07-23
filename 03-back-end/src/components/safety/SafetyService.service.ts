import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import SafetyModel from './SafetyModel.model';

class SafetyAdapterOptions implements IAdapterOptions {

}

class SafetyService extends BaseService<SafetyModel, SafetyAdapterOptions> {
    tableName(): string {
        return "safety";
    }

    protected async adaptToModel(data: any): Promise<SafetyModel> {
        const safety: SafetyModel = new SafetyModel();

        safety.safetyId = +data?.safety_id;
        safety.name = data?.name;

        return safety;
    }
}

export default SafetyService;