import ICategory from './ICategory.model';
import IBrand from './IBrand.model';
import IModel from './IModel.model';
import IUser from './IUser.model';

export default interface IAd {
    adId: number;
    category?: ICategory;
    brands: IBrand;
    models: IModel;
    user: IUser;
    carBody: string;
    fuelType: string;
    drive: string;
    transmission: string;
    doors: string;
    seats: string;
    steeringWheelSide: string;
    airCondition:string;
    damage:string;
    origin: string;
    safety: string;
    equipment: string;
    vehicleCondition: string;
    emissionClass: string;
    interiorMaterial: string;
    replacement: string;
    title: string;
    price: number;
    fixed: boolean;
    year: string; 
    mark: string;
    cm3: string;
    kw: string;
    ks: string;
    mileage: string;
    color: string;
    interiorColor: string;
    registrationUntil: string;
    description: string;

}