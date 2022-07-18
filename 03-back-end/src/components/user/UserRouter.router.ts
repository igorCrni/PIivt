import * as express from 'express';
import IApplicationResources from '../../common/IApplicationResources.inteface';
import IRouter from '../../common/IRouter.interface';
import AdController from '../ad/AdController.controller';
import UserController from './UserController.controller';

class UserRouter implements IRouter {
    public setupRoutes(application: express.Application, resources: IApplicationResources) {
        const userController: UserController = new UserController(resources.services);
        const adController: AdController = new AdController(resources.services);

        application.get("/api/user",                  userController.getAll.bind(userController));
        application.get("/api/user/:id",              userController.getById.bind(userController));
        application.post("/api/user/register",        userController.register.bind(userController));
        application.put("/api/user/:id",              userController.editById.bind(userController));
        application.get("/api/user/activate/:code",   userController.activate.bind(userController));

        application.post("/api/user/:uid/category/:cid/brand/:bid/model/:mid/ad",     adController.add.bind(adController));
        application.put("/api/user/:uid/ad/:aid",                                     adController.editAd.bind(adController));
        application.post("/api/user/:uid/ad/:aid/photo",                              adController.uploadPhoto.bind(adController));
        application.delete("/api/user/:uid/ad/:aid/photo/:pid",                       adController.deletePhoto.bind(adController));
        application.delete("/api/user/:uid/ad/:aid",                                  adController.delete.bind(adController));
    }
}

export default UserRouter;