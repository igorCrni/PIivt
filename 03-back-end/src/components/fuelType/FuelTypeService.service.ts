import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import FuelTypeModel from './FuelTypeModel.model';

class FuelTypeAdapterOptions implements IAdapterOptions {

}

class FuelTypeService extends BaseService<FuelTypeModel, FuelTypeAdapterOptions> {
    tableName(): string {
        return "fuel_type";
    }

    protected async adaptToModel(data: any): Promise<FuelTypeModel> {
        const fuelType: FuelTypeModel = new FuelTypeModel();

        fuelType.fuelTypeId = +data?.fuel_type_id;
        fuelType.name = data?.name;

        return fuelType;
    }
}

export default FuelTypeService;