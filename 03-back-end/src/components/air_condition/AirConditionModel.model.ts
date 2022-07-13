import IModel from '../../common/IModel.inteface';

export default class AirConditionModel implements IModel {
    airConditionId: number;
    no: boolean;
    manual: boolean;
    automatic: boolean;
}