import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import FuelTypeModel from './FuelTypeModel.model';
import IAddFuelType from './dto/IAddFuelType.dto';

export interface IFuelTypeAdapterOptions extends IAdapterOptions{}

export default class FuelTypeService extends BaseService<FuelTypeModel, IFuelTypeAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<FuelTypeModel> {
        const fuelType: FuelTypeModel = new FuelTypeModel();

        fuelType.fuelTypeId =     +data?.fuel_type_id;
        fuelType.petrol =          data?.petrol;
        fuelType.diesel =          data?.diesel;
        fuelType.petrolTng =       data?.petrol_tng;
        fuelType.petrolCng =       data?.petrol_cng;
        fuelType.electric =        data?.electric;
        fuelType.hybrid =          data?.minhybridivan;

        return fuelType;
    }

    public async add(data: IAddFuelType): Promise<FuelTypeModel> {
        return this.baseAdd(data, {});
    }
}