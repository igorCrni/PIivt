import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import CarBodyController from './CarBodyController.controller';

class CarBodyRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const carBodyController: CarBodyController = new CarBodyController (resources.services);

        application.get("/api/carBody",                carBodyController.getAll.bind(carBodyController));
        application.get("/api/carBody/:id",                carBodyController.getById.bind(carBodyController));
    }
}

export default CarBodyRouter;
