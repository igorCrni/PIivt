import { DefaultCategoryAdapterOptions } from './CategoryService.service';
import {Request, response, Response} from "express";
import IAddCategory, { AddCategoryValidator } from './dto/IAddCategory.dto';
import { AddBrandValidator, IAddBrandDto } from '../brand/dto/IAddBrand.dto';
import { EditCategoryValidator, IEditCategoryDto } from './dto/IEditCategory.dto';
import IEditBrandDto, { EditBrandValidator } from '../brand/dto/IEditBrand.dto';
import BaseController from '../../common/BaseController';
import { AddModelValidator } from '../model/dto/IAddModel.dto';
import IEditModelDto from '../model/dto/IEditModel.dto';

class CategoryController extends BaseController {
    
    async getAll(req: Request, res: Response) {
        this.services.category.getAll(DefaultCategoryAdapterOptions)
        .then(result =>{
            res.send(result);
        })
        .catch(error =>{
            res.status(500).send(error?.message);
        });
    }

    async getById(req: Request, res: Response) {
        const id: number = +req.params?.id;

        this.services.category.getById(id, {
            loadBrands: true
        })
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

                res.send(result);
            })
            .catch(error => {
                res.status(500).send(error?.message);
            });

    }

    async add(req: Request, res: Response) {
        const data = req.body as IAddCategory;

        if (!AddCategoryValidator(data)) {
            return res.status(400).send(AddCategoryValidator.errors);
        }

        this.services.category.add(data)
        .then(result =>{
            res.send(result);
        })
        .catch(error => {
            res.status(400).send(error?.message);
        });
    }

    async edit(req: Request, res: Response) {
        const id: number = +req.params?.cid;
        const data = req.body as IEditCategoryDto;

        if (!EditCategoryValidator(data)) {
            return res.status(400).send(EditCategoryValidator.errors);
        }

        this.services.category.getById(id, {
            loadBrands: false
        })
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

               this.services.category.editById(id, {
                   name: data.name
               })
               .then(result =>{
                    res.send(result);
               })
               .catch(error =>{
                   res.status(400).send(error?.message);
               })
            })
            .catch(error => {
                res.status(500).send(error?.message);
            });
    }

    async addBrand(req: Request, res: Response) {
        const categoryId: number = +req.params?.cid;
        const data = req.body as IAddBrandDto;

        if(!AddBrandValidator(data)) {
            return res.status(400).send(AddBrandValidator.errors);
        }

        this.services.category.getById(categoryId, {loadBrands: false })
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

                this.services.brand.add({
                    name: data.name,
                    category_id: categoryId
                })
                .then(result =>{
                    res.send(result);
                })
                .catch(error => {
                    res.status(400).send(error?.message);
                });

            })
            .catch(error => {
                res.status(500).send(error?.message);
            });
    }

    async editBrand(req: Request, res: Response) {
        const categoryId: number = +req.params?.cid;
        const brandId: number = +req.params?.bid;
        const data = req.body as IEditBrandDto;

        if(!EditBrandValidator(data)) {
            return res.status(400).send(EditBrandValidator.errors);
        }

        this.services.category.getById(categoryId, {
            loadBrands: false
        })
        .then(result =>{
            if(result === null) {
                return res.status(404).send('Category not found!');
            }

            this.services.brand.getById(brandId, {})
            .then(result =>{
                if(result === null) {
                    return res.status(404).send('Brand not found!');
                }

                if (result.categoryId !== categoryId) {
                    return res.status(404).send('This brand does not belong to this category!');
                }

                this.services.brand.editById(brandId, data)
                .then(result =>{
                    res.send(result);
                })
            });
        })
        .catch(error =>{
            res.status(500).send(error?.message);
        });

    }

    async addModel(req: Request, res: Response) {
        const brandId: number = +req.params?.bid;
        const data = req.body as IAddBrandDto;

        if(!AddModelValidator(data)) {
            return res.status(400).send(AddModelValidator.errors);
        }

        this.services.model.getById(brandId, {loadBrands: false })
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

                this.services.model.add({
                    name: data.name,
                    brand_id: brandId
                })
                .then(result =>{
                    res.send(result);
                })
                .catch(error => {
                    res.status(400).send(error?.message);
                });

            })
            .catch(error => {
                res.status(500).send(error?.message);
            });
    }

    async editModel(req: Request, res: Response) {
        const brandId: number = +req.params?.bid;
        const modelId: number = +req.params?.mid;
        const data = req.body as IEditModelDto;

        if(!EditBrandValidator(data)) {
            return res.status(400).send(EditBrandValidator.errors);
        }

        this.services.model.getById(brandId, {
            
        })
        .then(result =>{
            if(result === null) {
                return res.status(404).send('Brand not found!');
            }

            this.services.model.getById(modelId, {})
            .then(result =>{
                if(result === null) {
                    return res.status(404).send('Model not found!');
                }

                if (result.brandId !== brandId) {
                    return res.status(404).send('This model does not belong to this brand!');
                }

                this.services.model.editById(modelId, data)
                .then(result =>{
                    res.send(result);
                })
            });
        })
        .catch(error =>{
            res.status(500).send(error?.message);
        });

    }
}

export default CategoryController;
