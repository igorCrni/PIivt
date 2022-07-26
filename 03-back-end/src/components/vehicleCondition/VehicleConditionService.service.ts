import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import VehicleConditionModel from './VehicleConditionModel.model';

class VehicleConditionAdapterOptions implements IAdapterOptions {

}

interface AdVehicleConditionInterface {
    ad_vehicle_condition_id: number;
    ad_id: number;
    vehicle_condition_id: number;
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

    public async getAllByAdId(adId:number, options: VehicleConditionAdapterOptions = {}): Promise<VehicleConditionModel[]>{
        return new Promise((resolve, reject) => {
            this.getAllFromTableByFieldNameAndValue<AdVehicleConditionInterface>("ad_vehicle_condition", "ad_id", adId)
            .then(async result => {
                const vehicleConditionIds = result.map(ae => ae.vehicle_condition_id);

                const vehicleConditions: VehicleConditionModel[] = [];

                for (let vehicleConditionId of vehicleConditionIds) {
                    const vehicleCondition = await this.getById(vehicleConditionId, options);
                    vehicleConditions.push(vehicleCondition);
                }

                resolve(vehicleConditions);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}

export default VehicleConditionService;