import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.inteface";
import IRouter from "../../common/IRouter.interface";
import EquipmentController from './EquipmentController.controller';

class EquipmentRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const equipmentController: EquipmentController = new EquipmentController (resources.services);

        application.get("/api/equipment",                equipmentController.getAll.bind(equipmentController));
        application.get("/api/equipment/:id",                equipmentController.getById.bind(equipmentController));
    }
}

export default EquipmentRouter;
