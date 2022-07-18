import CategoryController from "./CategoryController.controller";
import * as express from 'express';
import IApplicationResources from '../../common/IApplicationResources.inteface';
import IRouter from "../../common/IRouter.interface";
import AdController from '../ad/AdController.controller';

class CategoryRouter implements IRouter{
    public setupRoutes (application: express.Application, resources: IApplicationResources) {
        const categoryController: CategoryController = new CategoryController(resources.services);
        const adController: AdController = new AdController(resources.services);

        //category
        application.get("/api/category",                categoryController.getAll.bind(categoryController));
        application.get("/api/category/:id",            categoryController.getById.bind(categoryController));
        application.post("/api/category",               categoryController.add.bind(categoryController));
        application.put("/api/category/:cid",           categoryController.edit.bind(categoryController));
        //brand
        application.post("/api/category/:cid/brand",    categoryController.addBrand.bind(categoryController));
        application.put("/api/category/:cid/brand/:bid", categoryController.editBrand.bind(categoryController));
        //model
        application.post("/api/category/:cid/brand/:bid/model",    categoryController.addModel.bind(categoryController));
        application.put("/api/category/:cid/brand/:bid/model/:mid", categoryController.editModel.bind(categoryController));
        //ad
        application.get("/api/category/:cid/brand/:bid/model/:mid/ad/:aid",      adController.getAdById.bind(adController));
        application.get("/api/category/:cid/ad",                                 adController.getAllAdByCategoryId.bind(adController));
        application.get("/api/category/:cid/brand/:bid/ad",                      adController.getAllAdByBrandId.bind(adController));
        application.get("/api/category/:cid/brand/:bid/model/:mid/ad",           adController.getAllAdByModelId.bind(adController));
    }
}

export default CategoryRouter;
