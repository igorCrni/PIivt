import { LargeNumberLike } from "crypto";
import IModel from "../../common/IModel.inteface";
import PhotoModel from '../photo/PhotoModel.model';
import EquipmentModel from '../../../dist/components/equipment/EquipmentModel.model';
import SafetyModel from '../../../dist/components/safety/SafetyModel.model';
import VehicleConditionModel from '../../../dist/components/vehicleCondition/VehicleConditionModel.model';

export default class AdModel implements IModel {

    adId: number;
    carBody: string;
    fuelType: string;
    drive: string;
    transmission: string;
    doors: string;
    seats: string;
    steeringWheelSide: string;
    airCondition: string;
    damage: string;
    origin: string;
    safety: string;
    equipment: string;
    vehicleCondition: string;
    emissionClass: string;
    interiorMaterial: string;
    replacement: string;
    title: string;
    price: number;
    year: string;
    cm3: string;
    kw: string;
    ks: string;
    mileage:string;
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