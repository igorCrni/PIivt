import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import VehicleConditionModel from './VehicleConditionModel.model';

class VehicleConditionAdapterOptions implements IAdapterOptions {

}

class VehicleConditionService extends BaseService<VehicleConditionModel, VehicleConditionAdapterOptions> {
    tableName(): string {
        return "vehicle_condition";
    }

    protected async adaptToModel(data: any): Promise<VehicleConditionModel> {
        const vehicle_condition: VehicleConditionModel = new VehicleConditionModel();

        vehicle_condition.vehicleConditionId = +data?.vehicle_condition_id;
        vehicle_condition.name = data?.name;

        return vehicle_condition;
    }
}

export default VehicleConditionService;