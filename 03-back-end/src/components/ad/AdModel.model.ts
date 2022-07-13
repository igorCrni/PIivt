import { LargeNumberLike } from "crypto";
import IModel from "../../common/IModel.inteface";

class AdModel implements IModel {


    //FKs:
    categoryId: number;
    brandId: number;
    modelId: number;
    userId: number;
    photoId:number;
    carBodyId:number;
    fuelTypeId: number;
    driveId: number;
    transmissionId: number;
    doorsId: number;
    seatsId: number;
    steeringWheelSideId: number;
    airConditionId: number;
    damgeId: number;
    originId: number;
    safetyId: number;
    equipmentId: number;
    vehicleConditionId: number;
}

export default AdModel;