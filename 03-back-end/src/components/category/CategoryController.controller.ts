import CategoryService, { DefaultCategoryAdapterOptions } from './CategoryService.service';
import {Request, Response} from "express";
import IAddCategory, { AddCategoryValidator } from './dto/IAddCategory.dto';
import IAddBrand, { AddBrandValidator } from '../brand/dto/IAddBrand.dto';
import BrandService from '../brand/BrandService.service';

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

    async addBrand(req: Request, res: Response) {
        const categoryid: number = +req.params?.cid;
        const data = req.body as IAddBrand;

        if(!AddBrandValidator(data)) {
            return res.status(400).send(AddBrandValidator.errors);
        }

        this.categoryService.getById(categoryid, {loadBrands: false })
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

                this.brandService.add({
                    name: data.name,
                    categoryId: categoryid
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
}

export default CategoryController;
