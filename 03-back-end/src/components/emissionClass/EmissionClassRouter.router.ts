import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import EmissionClassController from './EmissionClassController.controller';

class EmissionClassRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const emissionClassController: EmissionClassController = new EmissionClassController (resources.services);

        application.get("/api/emissionClass",                emissionClassController.getAll.bind(emissionClassController));
        application.get("/api/emissionClass/:id",                emissionClassController.getById.bind(emissionClassController));
    }
}

export default EmissionClassRouter;
