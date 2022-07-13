import IModel from '../../common/IModel.inteface';

export default class CarBodyModel implements IModel {
    carBodyId: number;
    sedan: boolean;
    hatchback: boolean;
    cupe: boolean;
    stationWagon: boolean;
    convertible: boolean;
    minivan: boolean;
    suv: boolean;
    pickup: boolean;
}