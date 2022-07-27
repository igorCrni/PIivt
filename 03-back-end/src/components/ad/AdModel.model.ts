import { LargeNumberLike } from "crypto";
import IModel from "../../common/IModel.inteface";
import PhotoModel from '../photo/PhotoModel.model';
import EquipmentModel from "../equipment/EquipmentModel.model";
import SafetyModel from "../safety/SafetyModel.model";
import VehicleConditionModel from "../vehicleCondition/VehicleConditionModel.model";

export default class AdModel implements IModel {

    adId: number;
    carBodyId: number;
    fuelTypeId: number;
    driveId: number;
    transmissionId: number;
    doorsId: number;
    seatsId: number;
    steeringWheelSideId: number;
    airConditionId:number;
    damageId:number;
    originId: number;
    emissionClassId: number;
    interiorMaterialId: number;
    replacementId: number;
    title: string;
    price: number;
    year: string; 
    cm3: string;
    kw: string;
    ks: string;
    mileage: string;
    color: string;
    interiorColor: string;
    registrationUntil: string;
    description: string;

    //FKs:
    categoryId: number;
    brandId: number;
    modelId: number;
    userId: number;

    vehicleConditions?: VehicleConditionModel[] = [];
    safeties? : SafetyModel[] = [];
    equipments? : EquipmentModel[] = [];
    photos?: PhotoModel[] = [];
}