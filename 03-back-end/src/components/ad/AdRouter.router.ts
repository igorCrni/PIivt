import * as express from 'express';
import IApplicationResources from '../../common/IApplicationResources.inteface';
import IRouter from "../../common/IRouter.interface";
import AdController from './AdController.controller';

class AdRouter implements IRouter{
    public setupRoutes (application: express.Application, resources: IApplicationResources) {
        const adController: AdController = new AdController(resources.services);

        application.get("/api/ad/:id",            adController.getAdByAdId.bind(adController));
    }
}

export default AdRouter;
