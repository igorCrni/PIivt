import * as mysql2 from "mysql2/promise";
import BrandService from "../components/brand/BrandService.service";
import CategoryService from "../components/category/CategoryService.service";
import ModelService from "../components/model/ModelService.service";
import UserService from "../components/user/UserService.service";
import PhotoService from '../components/photo/PhotoService.service';
import AdService from '../components/ad/AdService.service';

export interface IServices {
    category: CategoryService;
    brand: BrandService;
    model: ModelService;
    user: UserService;
    photo: PhotoService;
    ad: AdService;
}

export default interface IApplicationResources {
    databaseConnection: mysql2.Connection;
    services: IServices;
}
