import IModel from '../../common/IModel.inteface';

export default class VehicleConditionModel implements IModel {
    vehicleConditionId: number;
    firstOwner: boolean;
    servisBook: boolean;
    adaptedForTheDisabled: boolean;
    drivingSchoolVehicle: boolean;
    spareKey: boolean;
    taxi: boolean;
    restored: boolean;
    testVehicle: boolean;
    garaged: boolean;
    oldtimer: boolean;
    tuning: boolean;
}