import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import SeatsController from './SeatsController.controller';

class SeatsRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const seatsController: SeatsController = new SeatsController (resources.services);

        application.get("/api/seats",                seatsController.getAll.bind(seatsController));
        application.get("/api/seats/:id",                seatsController.getById.bind(seatsController));
    }
}

export default SeatsRouter;
