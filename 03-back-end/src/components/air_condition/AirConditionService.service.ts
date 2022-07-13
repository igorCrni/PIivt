import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import AirConditionModel from './AirConditionModel.model';
import IAddAirCondition from './dto/IAddAirCondition.dto';

export interface IAirConditionAdapterOptions extends IAdapterOptions{}

export default class AirConditionService extends BaseService<AirConditionModel, IAirConditionAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<AirConditionModel> {
        const airCondition: AirConditionModel = new AirConditionModel();

        airCondition.airConditionId =          +data?.airCondition_id;
        airCondition.no =                       data?.left;
        airCondition.manual =                   data?.right;
        airCondition.automatic =                data?.automatic;
        
        return airCondition;
    }

    public async add(data: IAddAirCondition): Promise<AirConditionModel> {
        return this.baseAdd(data, {});
    }
}