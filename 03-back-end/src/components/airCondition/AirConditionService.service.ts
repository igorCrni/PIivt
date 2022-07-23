import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import AirConditionModel from './AirConditionModel.model';

class AirConditionAdapterOptions implements IAdapterOptions {

}

class AirConditionService extends BaseService<AirConditionModel, AirConditionAdapterOptions> {
    tableName(): string {
        return "air_condition";
    }

    protected async adaptToModel(data: any): Promise<AirConditionModel> {
        const airCondition: AirConditionModel = new AirConditionModel();

        airCondition.airConditionId = +data?.air_condition_id;
        airCondition.name = data?.name;

        return airCondition;
    }
}

export default AirConditionService;