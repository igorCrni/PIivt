import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import AirConditionController from './AirConditionController.controller';

class AirConditionRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const airConditionController: AirConditionController = new AirConditionController (resources.services);

        application.get("/api/airCondition",                airConditionController.getAll.bind(airConditionController));
        application.get("/api/airCondition/:id",                airConditionController.getById.bind(airConditionController));
    }
}

export default AirConditionRouter;
