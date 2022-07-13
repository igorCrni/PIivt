import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import CarBodyModel from './CarBodyModel.model';
import IAddCarBody from './dto/IAddCarBody.dto';

export interface ICarBodyAdapterOptions extends IAdapterOptions{}

export default class CarBodyService extends BaseService<CarBodyModel, ICarBodyAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<CarBodyModel> {
        const carBody: CarBodyModel = new CarBodyModel();

        carBody.carBodyId =     +data?.car_body_id;
        carBody.sedan =         data?.sedan;
        carBody.hatchback =     data?.hatchback;
        carBody.cupe =          data?.cupe;
        carBody.stationWagon =  data?.station_wagon;
        carBody.convertible =   data?.convertible;
        carBody.minivan =       data?.minivan;
        carBody.suv =           data?.suv;
        carBody.pickup =        data?.pickup;

        return carBody;
    }

    public async add(data: IAddCarBody): Promise<CarBodyModel> {
        return this.baseAdd(data, {});
    }
}