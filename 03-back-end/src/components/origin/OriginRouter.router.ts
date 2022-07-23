import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import OriginController from './OriginController.controller';

class OriginRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const originController: OriginController = new OriginController (resources.services);

        application.get("/api/origin",                originController.getAll.bind(originController));
        application.get("/api/origin/:id",                originController.getById.bind(originController));
    }
}

export default OriginRouter;
