import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import SafetyController from './SafetyController.controller';

class SafetyRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const safetyController: SafetyController = new SafetyController (resources.services);

        application.get("/api/safety",                safetyController.getAll.bind(safetyController));
        application.get("/api/safety/:id",                safetyController.getById.bind(safetyController));
    }
}

export default SafetyRouter;
