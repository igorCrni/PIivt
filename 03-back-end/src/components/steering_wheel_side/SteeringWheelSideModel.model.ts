import IModel from '../../common/IModel.inteface';

export default class SteeringWheelSideModel implements IModel {
    steeringWheelSideId: number;
    left: boolean;
    right: boolean;
}