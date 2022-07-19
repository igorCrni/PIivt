import IBrand from './IBrand.model';

export default interface ICategory {
    categoryId:number;
    name:string;
    brands?: IBrand[];
}