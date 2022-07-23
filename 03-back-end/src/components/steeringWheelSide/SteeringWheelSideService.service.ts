import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import SteeringWheelSideModel from './SteeringWheelSideModel.model';

class SteeringWheelSideAdapterOptions implements IAdapterOptions {

}

class SteeringWheelSideService extends BaseService<SteeringWheelSideModel, SteeringWheelSideAdapterOptions> {
    tableName(): string {
        return "steering_wheel_side";
    }

    protected async adaptToModel(data: any): Promise<SteeringWheelSideModel> {
        const steeringWheelSide: SteeringWheelSideModel = new SteeringWheelSideModel();

        steeringWheelSide.steeringWheelSideID = +data?.steering_wheel_side_id;
        steeringWheelSide.name = data?.name;

        return steeringWheelSide;
    }
}

export default SteeringWheelSideService;