import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import CarBodyModel from './CarBodyModel.model';

class CarBodyAdapterOptions implements IAdapterOptions {

}

class CarBodyService extends BaseService<CarBodyModel, CarBodyAdapterOptions> {
    tableName(): string {
        return "car_body";
    }

    protected async adaptToModel(data: any): Promise<CarBodyModel> {
        const car_body: CarBodyModel = new CarBodyModel();

        car_body.carBodyId = +data?.car_body_id;
        car_body.name = data?.name;

        return car_body;
    }
}

export default CarBodyService;