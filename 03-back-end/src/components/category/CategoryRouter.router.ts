import CategoryController from "./CategoryController.controller";
import CategoryService from "./CategoryService.service";
import * as express from 'express';
import IApplicationResources from '../../common/IApplicationResources.inteface';
import IRouter from "../../common/IRouter.interface";
import BrandService from "../brand/BrandService.service";

class CategoryRouter implements IRouter{
    public setupRoutes (application: express.Application, resources: IApplicationResources) {
        const categoryService: CategoryService = new CategoryService(resources.databaseConnection);
        const brandService: BrandService = new BrandService(resources.databaseConnection);

        const categoryController: CategoryController = new CategoryController(categoryService, brandService);

        application.get("/api/category",                categoryController.getAll.bind(categoryController));
        application.get("/api/category/:id",            categoryController.getById.bind(categoryController));
        application.post("/api/category",               categoryController.add.bind(categoryController));
        application.put("/api/category/:cid",           categoryController.edit.bind(categoryController));
        application.post("/api/category/:cid/brand",    categoryController.addBrand.bind(categoryController));
    }
}

export default CategoryRouter;
