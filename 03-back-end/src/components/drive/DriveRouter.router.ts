import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import DriveController from './DriveController.controller';

class DriveRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const driveController: DriveController = new DriveController (resources.services);

        application.get("/api/drive",                driveController.getAll.bind(driveController));
        application.get("/api/drive/:id",                driveController.getById.bind(driveController));
    }
}

export default DriveRouter;
