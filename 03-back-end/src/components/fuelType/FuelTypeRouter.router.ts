import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import FuelTypeController from "./FuelTypeController.controller";

class FuelTypeRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const fuelTypeController: FuelTypeController = new FuelTypeController (resources.services);

        application.get("/api/fuelType",                fuelTypeController.getAll.bind(fuelTypeController));
        application.get("/api/fuelType/:id",                fuelTypeController.getById.bind(fuelTypeController));
    }
}

export default FuelTypeRouter;
