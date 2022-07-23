import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import TransmissionController from './TransmissionController.controller';

class TransmissionRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const transmissionController: TransmissionController = new TransmissionController (resources.services);

        application.get("/api/transmission",                transmissionController.getAll.bind(transmissionController));
        application.get("/api/transmission/:id",                transmissionController.getById.bind(transmissionController));
    }
}

export default TransmissionRouter;
