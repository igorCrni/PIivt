import * as mysql2 from "mysql2/promise";
import BrandService from "../components/brand/BrandService.service";
import CategoryService from "../components/category/CategoryService.service";
import ModelService from "../components/model/ModelService.service";
import UserService from "../components/user/UserService.service";
import PhotoService from '../components/photo/PhotoService.service';
import CarBodyService from '../components/car_body/CarBodyService.service';
import FuelTypeService from '../components/fuel_type/FuelTypeService.service';
import DriveService from '../components/drive/DriveService.service';
import TransmissionService from '../components/transmission/TransmissionService.service';
import DoorsService from '../components/doors/DoorsService.service';
import SeatsService from '../components/seats/SeatsService.service';

export interface IServices {
    category: CategoryService;
    brand: BrandService;
    model: ModelService;
    user: UserService;
    photo: PhotoService;
    carBody: CarBodyService;
    fuelType: FuelTypeService;
    drive: DriveService;
    transmission: TransmissionService;
    doors: DoorsService;
    seats: SeatsService;
}

export default interface IApplicationResources {
    databaseConnection: mysql2.Connection;
    services: IServices;
}
