import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import VehicleConditionController from './VehicleConditionController.controller';

class VehicleConditionRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const vehicleConditionController: VehicleConditionController = new VehicleConditionController (resources.services);

        application.get("/api/vehicleCondition",                vehicleConditionController.getAll.bind(vehicleConditionController));
        application.get("/api/vehicleCondition/:id",                vehicleConditionController.getById.bind(vehicleConditionController));
    }
}

export default VehicleConditionRouter;
