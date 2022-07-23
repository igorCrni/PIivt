import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import DoorsController from './DoorsController.controller';

class DoorsRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const doorsController: DoorsController = new DoorsController (resources.services);

        application.get("/api/doors",                doorsController.getAll.bind(doorsController));
        application.get("/api/doors/:id",                doorsController.getById.bind(doorsController));
    }
}

export default DoorsRouter;
