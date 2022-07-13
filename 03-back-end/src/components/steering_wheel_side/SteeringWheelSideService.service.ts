import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import SteeringWheelSideModel from './SteeringWheelSideModel.model';
import IAddSteeringWheelSide from './dto/IAddSteeringWheelSide.dto';

export interface ISteeringWheelSideAdapterOptions extends IAdapterOptions{}

export default class SteeringWheelSideService extends BaseService<SteeringWheelSideModel, ISteeringWheelSideAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<SteeringWheelSideModel> {
        const steeringWheelSide: SteeringWheelSideModel = new SteeringWheelSideModel();

        steeringWheelSide.steeringWheelSideId =          +data?.steeringWheelSide_id;
        steeringWheelSide.left =                          data?.left;
        steeringWheelSide.right =                         data?.right;
        
        return steeringWheelSide;
    }

    public async add(data: IAddSteeringWheelSide): Promise<SteeringWheelSideModel> {
        return this.baseAdd(data, {});
    }
}