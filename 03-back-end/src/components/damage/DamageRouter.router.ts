import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import DamageController from './DamageController.controller';

class DamageRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const damageController: DamageController = new DamageController (resources.services);

        application.get("/api/damage",                damageController.getAll.bind(damageController));
        application.get("/api/damage/:id",                damageController.getById.bind(damageController));
    }
}

export default DamageRouter;
