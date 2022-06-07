import * as mysql2 from "mysql2/promise";
import BrandService from "../components/brand/BrandService.service";
import CategoryService from "../components/category/CategoryService.service";
import ModelService from "../components/model/ModelService.service";

export interface IServices {
    category: CategoryService;
    brand: BrandService;
    model: ModelService
}

export default interface IApplicationResources {
    databaseConnection: mysql2.Connection;
    services: IServices;
}
