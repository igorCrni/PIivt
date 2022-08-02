import IModel from './IModel.model';
export default interface IBrand {
    brandId: number;
    name: string;
    models?: IModel[];
    categoryId: number;
    
}