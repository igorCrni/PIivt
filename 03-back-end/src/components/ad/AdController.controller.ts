import { Request, Response } from 'express';
import BaseController from '../../common/BaseController';
import IConfig, { IResize } from '../../common/IConfig.interface';
import { DevConfig } from '../../configs';
import { AddAdValidator, IAddAdDto } from './dto/IAddAd.dto';
import { fstat, mkdirSync, readFileSync, unlinkSync } from "fs";
import { UploadedFile } from 'express-fileupload';
import filetype from 'magic-bytes.js'
import { extname, basename, dirname } from 'path';
import sizeOf from "image-size";
import * as uuid from "uuid";
import * as sharp from "sharp";
import PhotoModel from "../photo/PhotoModel.model";
import { IUserAdapterOptions, DefaultUserAdapterOptions } from '../user/UserService.service';
import IEditAdDto, { EditAdValidator } from './dto/IEditAd.dto';
import { DefaultCategoryAdapterOptions } from '../category/CategoryService.service';
import { DefaultAdAdapterOptions } from './AdService.service';

export default class AdController extends BaseController{

    async getAllAdByCategoryId(req: Request, res: Response) {
        const categoryId: number = +req.params?.cid;

        this.services.category.getById(categoryId, {
            loadBrands:false,
        })
        .then(result => {
            if (result === null) {
                return res.status(404).send("Category not found!");
            }

            this.services.ad.getAllByCategoryId(categoryId)
            .then(result => {
                res.send(result);
            })
            .catch(error => {
                res.status(500).send(error?.message);
            });
        })
        .catch(error => {
            res.status(500).send(error?.message);
        });
    }
    async getAllAdByBrandId(req: Request, res: Response) {
        const categoryId: number = +req.params?.cid;
        const brandId: number = +req.params?.bid;

        this.services.category.getById(categoryId, {
            loadBrands:false,
        })
        .then(result => {
            if (result === null) {
                return res.status(404).send("Category not found!");
            }

            this.services.brand.getById(brandId,{
                loadModels:false,
            })
            .then(result => {
                if (result === null) {
                    return res.status(404).send("Brand not found!");
                }

                this.services.ad.getAllByBrandId(brandId)
                .then(result => {
                    res.send(result);
                })
                .catch(error => {
                    res.status(500).send(error?.message);
                });
            })
        })
        .catch(error => {
            res.status(500).send(error?.message);
        });
    }

    async getAllAdByModelId(req: Request, res: Response) {
        const categoryId: number = +req.params?.cid;
        const brandId: number = +req.params?.bid;
        const modelId: number = +req.params?.mid;

        this.services.category.getById(categoryId, {
            loadBrands:false,
        })
        .then(result => {
            if (result === null) {
                return res.status(404).send("Category not found!");
            }

            this.services.brand.getById(brandId,{
                loadModels:false,
            })
            .then(result => {
                if (result === null) {
                    return res.status(404).send("Brand not found!");
                }

                this.services.model.getById(modelId,{})
                .then(result => {
                    if (result === null) {
                        return res.status(404).send("Model not found!");
                    }
                    this.services.ad.getAllByModelId(modelId)
                    .then(result => {
                        res.send(result);
                    })
                    .catch(error => {
                        res.status(500).send(error?.message);
                    });
                })
            })
        })
        .catch(error => {
            res.status(500).send(error?.message);
        });
    }

    async getAllAdByUser(req: Request, res: Response) {
        const userId: number = +req.params?.uid;

        this.services.user.getById(userId, DefaultUserAdapterOptions)
        .then(result => {
            if (result === null) {
                return res.status(404).send("User not found!");
            }

            this.services.ad.getAllByUserId(userId)
            .then(result => {
                res.send(result);
            })
            .catch(error => {
                res.status(500).send(error?.message);
            });
        })
        .catch(error => {
            res.status(500).send(error?.message);
        });
    }

    async getAdById(req: Request, res: Response){
        const categoryId:number = +req.params?.cid;
        const brandId: number = +req.params?.bid;
        const modelId: number = +req.params?.mid;
        const adId: number = +req.params?.aid;

        this.services.category.getById(categoryId, {
            loadBrands:false,
        })
        .then(result => {
            if (result === null) {
                return res.status(404).send("Category not found!");
            }

            this.services.brand.getById(brandId,{
                loadModels:false,
            })
            .then(result => {
                if (result === null) {
                    return res.status(404).send("Brand not found!");
                }
                this.services.model.getById(modelId,{})
                .then(reuslt => {

                    if(reuslt === null) {
                        return res.status(404).send("Model not found!");
                    }
                    this.services.ad.getById(adId, {
                        loadPhotos: true,
                    })
                    .then(result => {
                        if(result === null){
                            return res.status(404).send("Ad not found!");
                        }
                        if(result.categoryId !== categoryId){
                            return res.status(404).send("Ad not found in this category!");
                        }
                        if(result.brandId !== brandId){
                            return res.status(404).send("Ad not found for this brand!");
                        }
                        if(result.modelId !== modelId){
                            return res.status(404).send("Ad not found for this model!");
                        }

                        res.send(result);
                    })
                    .catch(error => {
                        res.status(500).send(error?.message);
                    });
                })
            })
        })
        .catch(error => {
            res.status(500).send(error?.message);
        });
    }

    async add(req:Request, res:Response) {
        const categoryId: number = +req.params?.cid;
        const brandId: number = +req.params?.bid;
        const modelId: number = +req.params?.mid;
        const userId: number = +req.params?.uid;
        const data               =  req.body as IAddAdDto;

        if (!AddAdValidator(data)) {
            return res.status(400).send(AddAdValidator.errors);
        }

        this.services.category.getById(categoryId, {
            loadBrands:false,
        })
        .then(resultCategory => {
            if (resultCategory === null) {
                throw {
                    status: 404,
                    message: `Category with ${categoryId} not found`,
                }
            }

            this.services.brand.getById(brandId,{
                loadModels: false,
            })
            .then(resultBrand => {
                if(resultBrand === null){
                    throw {
                        status: 404,
                        message: `Brand with ${brandId} not found`,
                    }
                }

                this.services.model.getById(modelId,{})
                .then(resultModel => {
                    if(resultModel === null){
                        throw{
                            status: 404,
                            message: `Model with ${modelId} not found`,
                        }
                    }
                })
            })
        })
        .then(() => {
            return this.services.ad.startTransaction();
        })
        .then(() => {
            return this.services.ad.add({
                category_id: categoryId,
                brand_id: brandId,
                model_id: modelId,
                user_id: userId,
                car_body: data.carBody,
                fuel_type: data.fuelType,
                drive: data.drive,
                transmission: data.transmission,
                doors: data.doors,
                seats: data.seats,
                steering_wheel_side: data.steeringWheelSide,
                air_condition: data.airCondition,
                damage: data.damage,
                origin: data.origin,
                safety: data.safety,
                equipment: data.equipment,
                vehicle_condition: data.vehicleCondition,
                emission_class: data.emissionClass,
                interior_color: data.interiorMaterial,
                replacement: data.replacement,
                title: data.title,
                price: data.price,
                fixed: data.fixed,
                year: data.year,
                mark: data.mark,
                cm3: data.cm3,
                kw: data.kw,
                ks: data.ks,
                mileage:data.mileage,
                color: data.color,
                interior_material: data.interiorColor,
                registration_until: data.registrationUntil,
                description: data.description

            });
        })
        .then(async result => {
            await this.services.ad.commitChanges();
            res.send(result);
        })
        .catch(async error =>{
            await this.services.ad.rollbackChanges();
            res.status(error?.status ?? 500).send(error?.message);
        })
    }

    async editAd(req: Request, res: Response) {
        const userId: number = +req.params?.uid;
        const adId: number = +req.params?.aid;
        const data = req.body as IEditAdDto;

        if(!EditAdValidator(data)) {
            return res.status(400).send(EditAdValidator.errors);
        }

        this.services.user.getById(userId, {
            removePassword: false,
            removeActivationCode: false,
        })
        .then(result =>{
            if(result === null) {
                return res.status(404).send('User not found!');
            }

            this.services.ad.getById(adId, { loadPhotos: false})
            .then(result =>{
                if(result === null) {
                    return res.status(404).send('Ad not found!');
                }

                if (result.userId !== userId) {
                    return res.status(404).send('This ad does not belong to this user!');
                }

                this.services.ad.editById(adId, data, {loadPhotos:false})
                .then(result =>{
                    res.send(result);
                })
            });
        })
        .catch(error =>{
            res.status(500).send(error?.message);
        });

    }

    async uploadPhoto(req: Request, res: Response) {
        const userId: number = +req.params?.uid;
        const adId: number = +req.params?.aid;

        this.services.user.getById(userId, DefaultUserAdapterOptions)
        .then(result => {
            if (result === null) throw {
                code: 400,
                message: "User not found!",
            };

            return result;
        })
        .then(() => {
            return this.services.ad.getById(adId, {loadPhotos: false,});
        })
        .then(result => {
            if (result === null) throw {
                code: 404,
                message: "Ad not found!",
            };

            if (result.userId !== userId) throw {
                code: 404,
                message: "Ad not found for this user!",
            };

            return this.doFileUpload(req);
        })
        .then(async uploadedFiles => {
            const photos: PhotoModel[] = [];

            for (let singleFile of await uploadedFiles) {
                const filename = basename(singleFile);

                const photo = await this.services.photo.add({
                    name: filename,
                    file_path: singleFile,
                    ad_id: adId,
                });

                if (photo === null) {
                    throw {
                        code: 500,
                        message: "Failed to add this photo into the database!",
                    };
                }

                photos.push(photo);
            }

            res.send(photos);
        })
        .catch(error => {
            res.status(error?.code).send(error?.message);
        });
    }

    private async doFileUpload(req: Request): Promise<string[] | null> {
        const config: IConfig = DevConfig;

        if (!req.files || Object.keys(req.files).length === 0) throw {
            code: 400,
            message: "No file were uploaded!",
        };

        const fileFieldNames = Object.keys(req.files);

        const now = new Date();
        const year = now.getFullYear();
        const month = ((now.getMonth() + 1) + "").padStart(2, "0");

        const uploadDestinationRoot = config.server.static.path + "/";
        const destinationDirectory  = config.fileUploads.destinationDirectoryRoot + year + "/" + month + "/";

        mkdirSync(uploadDestinationRoot + destinationDirectory, {
            recursive: true,
            mode: "755",
        });

        const uploadedFiles = [];

        for (let fileFieldName of fileFieldNames) {
            const file = req.files[fileFieldName] as UploadedFile;

            const type = filetype(readFileSync(file.tempFilePath))[0]?.typename;

            if (!config.fileUploads.photos.allowedTypes.includes(type)) {
                unlinkSync(file.tempFilePath);
                throw {
                    code: 415,
                    message: `File ${fileFieldName} - type is not supported!`,
                };
            }

            file.name = file.name.toLocaleLowerCase();

            const declaredExtension = extname(file.name);

            if (!config.fileUploads.photos.allowedExtensions.includes(declaredExtension)) {
                unlinkSync(file.tempFilePath);
                throw {
                    code: 415,
                    message: `File ${fileFieldName} - extension is not supported!`,
                };
            }

            const size = sizeOf(file.tempFilePath);

            if ( size.width < config.fileUploads.photos.width.min || size.width > config.fileUploads.photos.width.max ) {
                unlinkSync(file.tempFilePath);
                throw {
                    code: 415,
                    message: `File ${fileFieldName} - image width is not supported!`,
                };
            }

            if ( size.height < config.fileUploads.photos.height.min || size.height > config.fileUploads.photos.height.max ) {
                unlinkSync(file.tempFilePath);
                throw {
                    code: 415,
                    message: `File ${fileFieldName} - image height is not supported!`,
                };
            }

            const fileNameRandomPart = uuid.v4();

            const fileDestinationPath = uploadDestinationRoot + destinationDirectory + fileNameRandomPart + "-" + file.name;

            file.mv(fileDestinationPath, async error => {
                if (error) {
                    throw {
                        code: 500,
                        message: `File ${fileFieldName} - could not be saved on the server!`,
                    };
                }

                for (let resizeOptions of config.fileUploads.photos.resize) {
                    await this.createResizedPhotos(destinationDirectory, fileNameRandomPart + "-" + file.name, resizeOptions);
                }
            });

            uploadedFiles.push(destinationDirectory + fileNameRandomPart + "-" + file.name);
        }

        return uploadedFiles;
    }

    private async createResizedPhotos(directory: string, filename: string, resizeOptions: IResize) {
        const config: IConfig = DevConfig;

        await sharp(config.server.static.path + "/" + directory + filename)
        .resize({
            width: resizeOptions.width,
            height: resizeOptions.height,
            fit: resizeOptions.fit,
            background: resizeOptions.defaultBackground,
            withoutEnlargement: true,
        })
        .toFile(config.server.static.path + "/" + directory + resizeOptions.prefix + filename);
    }

    //ne brise photo
    async deletePhoto(req: Request, res: Response) {
        const userId: number = +(req.params?.uid);
        const adId: number = +(req.params?.aid);
        const photoId: number = +(req.params?.pid);

        this.services.user.getById(userId, DefaultUserAdapterOptions)
        .then(result => {
            if (result === null) throw { status: 404, message: "User not found!" };
            return result;
        })
        .then(async user => {
            return {
                user: user,
                ad: await this.services.ad.getById(adId, {
                    loadPhotos: true,
                }),
            };
        })
        .then( ({ user, ad }) => {
            if (ad === null) throw { status: 404, message: "Ad not found!" };
            if (ad.userId !== user.userId) throw { status: 404, message: "Ad not found for this user!" };
            return ad;
        })
        .then(ad => {
            const photo = ad.photos?.find(photo => photo.photoId === photoId);
            if (!photo) throw { status: 404, message: "Photo not found for this ad!" };
            return photo;
        })
        .then(async photo => {
            await this.services.photo.deleteById(photo.photoId);
            return photo;
        })
        .then(photo => {
            const directoryPart = DevConfig.server.static.path + "/" + dirname(photo.filePath);
            const fileName      = basename(photo.filePath);

            for (let resize of DevConfig.fileUploads.photos.resize) {
                const filePath = directoryPart + "/" + resize.prefix + fileName;
                unlinkSync(filePath);
            }

            unlinkSync( DevConfig.server.static.path + "/" + photo.filePath);

            res.send("Deleted!");
        })
        .catch(error => {
            res.status(error?.status ?? 500).send(error?.message ?? "Server side error!");
        });
    }

    async delete(req: Request, res: Response) {
        const userId: number = +(req.params?.uid);
        const adId: number = +(req.params?.aid);

        this.services.user.getById(userId, DefaultUserAdapterOptions)
        .then(result => {
            if (result === null) throw { status: 404, message: "User not found!" };
            return result;
        })
        .then(async user => {
            return {
                user: user,
                ad: await this.services.ad.getById(adId, DefaultAdAdapterOptions),
            };
        })
        .then( ({ user, ad }) => {
            if (ad === null) throw { status: 404, message: "Ad not found!" };
            if (ad.userId !== user.userId) throw { status: 404, message: "Ad not found for this user!" };
            return ad;
        })
        .then(ad => {
            return this.services.ad.deleteById(ad.adId)
        })
        .then(result => {
            for (let filePath of result.filesToDelete) {
                const directoryPart = dirname(filePath);
                const fileName      = basename(filePath);

                for (let resize of DevConfig.fileUploads.photos.resize) {
                    const filePath = directoryPart + "/" + resize.prefix + fileName;
                    unlinkSync(filePath);
                }

                unlinkSync( filePath);
            }
        })
        .then(() => {
            res.send("Deleted!");
        })
        .catch(error => {
            res.status(error?.status ?? 500).send(error?.message ?? "Server side error!");
        });
    }
}