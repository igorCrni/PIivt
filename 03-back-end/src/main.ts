import * as express from "express";
import * as cors from "cors";
import IConfig from './common/IConfig.interface';
import { DevConfig } from "./configs";
import * as fs from "fs";
import * as morgan from "morgan";
import IApplicationResources from './common/IApplicationResources.inteface';
import * as mysql2 from 'mysql2/promise';
import CategoryService from "./components/category/CategoryService.service";
import BrandService from "./components/brand/BrandService.service";
import ModelService from "./components/model/ModelService.service";
import UserService from "./components/user/UserService.service";
import fileUpload = require("express-fileupload");
import PhotoService from "./components/photo/PhotoService.service";
import FuelTypeService from "./components/fuel_type/FuelTypeService.service";
import DriveService from "./components/drive/DriveService.service";
import TransmissionService from "./components/transmission/TransmissionService.service";
import DoorsService from "./components/doors/DoorsService.service";
import CarBodyService from "./components/car_body/CarBodyService.service";

async function main() {
    const config: IConfig = DevConfig;

fs.mkdirSync("./logs", {
    mode: 0o755,
    recursive: true,
});

const db = await mysql2.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    charset: config.database.charset,
    timezone: config.database.timezone,
    //supportBigNumbers: config.database.supportBigNumber,
});

const applicationResources: IApplicationResources = {
    databaseConnection: db,
    services: {
        category: null,
        brand: null,
        model: null,
        user: null,
        photo: null,
        carBody: null,
        fuelType: null,
        drive: null,
        transmission: null,
        doors: null,
    }
};
applicationResources.services.category = new CategoryService(applicationResources);
applicationResources.services.brand = new BrandService(applicationResources);
applicationResources.services.model = new ModelService(applicationResources);
applicationResources.services.user = new UserService(applicationResources);
applicationResources.services.photo = new PhotoService(applicationResources);
applicationResources.services.carBody = new CarBodyService(applicationResources);
applicationResources.services.fuelType = new FuelTypeService(applicationResources);
applicationResources.services.drive = new DriveService(applicationResources);
applicationResources.services.transmission = new TransmissionService(applicationResources);
applicationResources.services.doors = new DoorsService(applicationResources);



const application: express.Application = express();

application.use(morgan(config.logging.foramt, {
    stream: fs.createWriteStream(config.logging.path + "/" + config.logging.filename, {flags: 'a'}),
}));

application.use(cors());

application.use(express.urlencoded({extended: true,}));

application.use(fileUpload({
    limits: {
        files: config.fileUploads.maxFiles,
        fileSize: config.fileUploads.maxFileSize,
    },
    abortOnLimit: true,

    useTempFiles: true,
    tempFileDir: config.fileUploads.tempFileDirectory,
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: true,
}));

application.use(express.json());

application.use(config.server.static.route, express.static("./static", {
    index: config.server.static.index,
    dotfiles: config.server.static.dotfiles,
    cacheControl: config.server.static.cacheControl,
    etag: config.server.static.etag,
    maxAge: config.server.static.maxAge
}));

for(const router of config.routers) {
    router.setupRoutes(application, applicationResources);
}

application.use((req, res) => {
    res.sendStatus(404);
});

application.listen(config.server.port);
}

process.on('uncaughtException', error => {
    console.error('ERROR:',error);
});

main();
