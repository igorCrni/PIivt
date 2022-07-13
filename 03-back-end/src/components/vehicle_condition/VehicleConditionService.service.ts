import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import VehicleConditionModel from './VehicleConditionModel.model';
import IAddVehicleCondition from './dto/IAddVehicleCondition.dto';

export interface IVehicleConditionAdapterOptions extends IAdapterOptions{}

export default class VehicleConditionService extends BaseService<VehicleConditionModel, IVehicleConditionAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<VehicleConditionModel> {
        const vehicleCondition: VehicleConditionModel = new VehicleConditionModel();

        vehicleCondition.vehicleConditionId =      +data?.vehicleCondition_id;
        vehicleCondition.firstOwner =               data?.first_owner;
        vehicleCondition.servisBook =               data?.servis_book;
        vehicleCondition.adaptedForTheDisabled =    data?.adapted_for_the_disabled;
        vehicleCondition.drivingSchoolVehicle =     data?.driving_school_vehicle;
        vehicleCondition.spareKey =                 data?.spare_key;
        vehicleCondition.taxi =                     data?.taxi;
        vehicleCondition.restored =                 data?.restored;
        vehicleCondition.testVehicle =              data?.test_vehicle;
        vehicleCondition.garaged =                  data?.garaged;
        vehicleCondition.oldtimer =                 data?.oldtimer;
        vehicleCondition.tuning =                   data?.tuning;
        
        return vehicleCondition;
    }

    public async add(data: IAddVehicleCondition): Promise<VehicleConditionModel> {
        return this.baseAdd(data, {});
    }
}