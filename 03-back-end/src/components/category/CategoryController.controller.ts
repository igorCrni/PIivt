import CategoryService, { DefaultCategoryAdapterOptions } from './CategoryService.service';
import {Request, response, Response} from "express";
import IAddCategory, { AddCategoryValidator } from './dto/IAddCategory.dto';
import IAddBrand, { AddBrandValidator, IAddBrandDto } from '../brand/dto/IAddBrand.dto';
import BrandService from '../brand/BrandService.service';
import { EditCategoryValidator, IEditCategoryDto } from './dto/IEditCategory.dto';
import IEditBrandDto, { EditBrandValidator } from '../brand/dto/IEditBrand.dto';

class CategoryController {
    private categoryService: CategoryService;
    private brandService: BrandService;

    constructor(categoryService: CategoryService, brandService: BrandService) {
        this.categoryService = categoryService;
        this.brandService = brandService;
    }

    async getAll(req: Request, res: Response) {
        this.categoryService.getAll(DefaultCategoryAdapterOptions)
        .then(result =>{
            res.send(result);
        })
        .catch(error =>{
            res.status(500).send(error?.message);
        });
    }

    async getById(req: Request, res: Response) {
        const id: number = +req.params?.id;

        this.categoryService.getById(id, {
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

        this.categoryService.add(data)
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

        this.categoryService.getById(id, {
            loadBrands: false
        })
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

               this.categoryService.editById(id, {
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

        this.categoryService.getById(categoryId, {loadBrands: false })
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

                this.brandService.add({
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

        this.categoryService.getById(categoryId, {
            loadBrands: false
        })
        .then(result =>{
            if(result === null) {
                return res.status(404).send('Category not found!');
            }

            this.brandService.getById(brandId, {})
            .then(result =>{
                if(result === null) {
                    return res.status(404).send('Brand not found!');
                }

                if (result.categoryId !== categoryId) {
                    return res.status(404).send('This brand does not belong to this category!');
                }

                this.brandService.editById(brandId, data)
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
