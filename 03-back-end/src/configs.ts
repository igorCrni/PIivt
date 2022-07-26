import IConfig from "./common/IConfig.interface";
import CategoryRouter from "./components/category/CategoryRouter.router";
import UserRouter from "./components/user/UserRouter.router";
import fileUpload = require("express-fileupload");
import { MailConfigurationparameters } from "./config.mail";
import { readFileSync } from "fs";
import AuthRouter from "./components/auth/AuthRouter.router";
import EquipmentRouter from './components/equipment/EquipmentRouter.router';
import FuelTypeRouter from './components/fuelType/FuelTypeRouter.router';
import DriveRouter from './components/drive/DriveRouter.router';
import TransmissionRouter from "./components/transmission/TransmissionRouter.router";
import DoorsRouter from './components/doors/DoorsRouter.router';
import SeatsRouter from './components/seats/SeatsRouter.router';
import SteeringWheelSideRouter from "./components/steeringWheelSide/SteeringWheelSideRouter.router";
import AirConditionRouter from "./components/airCondition/AirConditionRouter.router";
import DamageRouter from './components/damage/DamageRouter.router';
import OriginRouter from './components/origin/OriginRouter.router';
import SafetyRouter from './components/safety/SafetyRouter.router';
import VehicleConditionRouter from './components/vehicleCondition/VehicleConditionRouter.router';
import EmissionClassRouter from './components/emissionClass/EmissionClassRouter.router';
import InteriorMaterialRouter from "./components/interiorMaterial/InteriorMaterialRouter.router";
import ReplacementRouter from './components/replacement/ReplacementRouter.router';
import CarBodyRouter from './components/carBody/CarBodyRouter.router';

const DevConfig: IConfig = {
    server: {
        port: 10000,
        static: {
            index: false,
            dotfiles: "deny",
            cacheControl: true,
            etag: true,
            maxAge: 1000 * 60 * 60 * 24,
            path: "./static",
            route: "/assets"
        }
    },
    logging: {
        path: "./logs",
        filename: "access.log",
        foramt: ":date[iso]\t:remote-addr\t:method\t:url\t:status\t:res[content-lenght] bytes\t:response-time ms",
    },
    database: {
        host: "localhost",
        port: 3306,
        user: "aplikacija",
        password: "aplikacija",
        database: "piivt_app",
        charset: "utf8",
        timezone: "+01:00",
        supportBigNumbers: true,
    },
    routers: [
        new CategoryRouter(),
        new UserRouter(),
        new AuthRouter(),
        new EquipmentRouter(),
        new FuelTypeRouter(),
        new DriveRouter(),
        new TransmissionRouter(),
        new DoorsRouter(),
        new SeatsRouter(),
        new SteeringWheelSideRouter(),
        new AirConditionRouter(),
        new DamageRouter(),
        new OriginRouter(),
        new SafetyRouter(),
        new VehicleConditionRouter(),
        new EmissionClassRouter(),
        new InteriorMaterialRouter(),
        new ReplacementRouter(),
        new CarBodyRouter(),
    ],

    mail: {
        host: "smtp.office365.com",
        port: 587,
        email: "",
        password: "",
        debug: true,
    },
    auth: {
        user: {
            algorithm:"RS256",
            issuer: "PIiVT",
            tokens: {
                auth: {
                    duration: 60 * 60 * 24,
                    keys: {
                        public: readFileSync("./.keystore/app.public","ascii"),
                        private: readFileSync("./.keystore/app.private","ascii"),
                    },
                },
                refresh: {
                    duration: 60 * 60 * 24 * 30,
                    keys: {
                        public: readFileSync("./.keystore/app.public","ascii"),
                        private: readFileSync("./.keystore/app.private","ascii"),
                    },
                }
            },
        },
        allowAllRoutesWithoutAuthTokens: true,
    },
    fileUploads: {
        maxFiles: 10,
        maxFileSize: 5 * 1024 * 1024,
        tempFileDirectory: "../temp/",
        destinationDirectoryRoot: "uploads/",
        photos: {
            allowedTypes: ["png","jpg"],
            allowedExtensions: [".png",".jpg"],
            width: {
                min:320,
                max:1920,
            },
            height: {
                min:153,
                max:1080,
            },
            resize: [
                {
                    prefix: "small-",
                    width: 320,
                    height: 240,
                    fit: "cover",
                    defaultBackground: { r: 0, g: 0, b: 0, alpha: 1, }
                },
                {
                    prefix: "medium-",
                    width: 640,
                    height: 480,
                    fit: "cover",
                    defaultBackground: { r: 0, g: 0, b: 0, alpha: 1, }
                },
            ],
        },
    },
};

DevConfig.mail = MailConfigurationparameters;

export  {DevConfig};
