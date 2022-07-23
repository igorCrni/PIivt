import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import SteeringWheelSideController from './SteeringWheelSideController.controller';

class SteeringWheelSideRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const steeringWheelSideController: SteeringWheelSideController = new SteeringWheelSideController (resources.services);

        application.get("/api/steeringWheelSide",                steeringWheelSideController.getAll.bind(steeringWheelSideController));
        application.get("/api/steeringWheelSide/:id",                steeringWheelSideController.getById.bind(steeringWheelSideController));
    }
}

export default SteeringWheelSideRouter;
