import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import InteriorMaterialController from './InteriorMaterialController.controller';

class InteriorMaterialRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const interiorMaterialController: InteriorMaterialController = new InteriorMaterialController (resources.services);

        application.get("/api/interiorMaterial",                interiorMaterialController.getAll.bind(interiorMaterialController));
        application.get("/api/interiorMaterial/:id",                interiorMaterialController.getById.bind(interiorMaterialController));
    }
}

export default InteriorMaterialRouter;
