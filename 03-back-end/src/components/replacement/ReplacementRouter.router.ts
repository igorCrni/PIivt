import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import ReplacementController from './ReplacementController.controller';

class ReplacementRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const replacementController: ReplacementController = new ReplacementController (resources.services);

        application.get("/api/replacement",                replacementController.getAll.bind(replacementController));
        application.get("/api/replacement/:id",                replacementController.getById.bind(replacementController));
    }
}

export default ReplacementRouter;
