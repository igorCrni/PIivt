import * as mysql2 from "mysql2/promise";
import BrandService from "../components/brand/BrandService.service";
import CategoryService from "../components/category/CategoryService.service";
import ModelService from "../components/model/ModelService.service";
import UserService from "../components/user/UserService.service";
import PhotoService from '../components/photo/PhotoService.service';
import AdService from '../components/ad/AdService.service';
import EquipmentService from '../components/equipment/EquipmentService.service';
import FuelTypeService from '../components/fuelType/FuelTypeService.service';
import DriveService from '../components/drive/DriveService.service';
import TransmissionService from '../components/transmission/TransmissionService.service';
import DoorsService from '../components/doors/DoorsService.service';
import SeatsService from '../components/seats/SeatsService.service';
import SteeringWheelSideService from '../components/steeringWheelSide/SteeringWheelSideService.service';
import AirConditionService from '../components/airCondition/AirConditionService.service';
import DamageService from '../components/damage/DamageService.service';
import OriginService from '../components/origin/OriginService.service';
import SafetyService from '../components/safety/SafetyService.service';
import VehicleConditionService from '../components/vehicleCondition/VehicleConditionService.service';
import EmissionClassService from '../components/emissionClass/EmissionClassService.service';
import InteriorMaterialService from '../components/interiorMaterial/InteriorMaterialService.service';
import ReplacementService from '../components/replacement/ReplacementService.service';
import CarBodyService from '../components/carBody/CarBodyService.service';

export interface IServices {
    category: CategoryService;
    brand: BrandService;
    model: ModelService;
    user: UserService;
    photo: PhotoService;
    ad: AdService;
    equipment: EquipmentService;
    fuelType: FuelTypeService;
    drive: DriveService;
    transmission: TransmissionService;
    doors: DoorsService;
    seats: SeatsService;
    steeringWheelSide: SteeringWheelSideService;
    airCondition: AirConditionService;
    damage: DamageService;
    origin: OriginService;
    safety: SafetyService;
    vehicleCondition: VehicleConditionService;
    emissionClass: EmissionClassService;
    interiorMaterial: InteriorMaterialService;
    replacement: ReplacementService;
    carBody: CarBodyService;
}

export default interface IApplicationResources {
    databaseConnection: mysql2.Connection;
    services: IServices;
}
