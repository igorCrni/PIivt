import IModel from '../../common/IModel.inteface';

export default class DriveModel implements IModel {
    driveId: number;
    fwd: boolean;
    rwd: boolean;
    awd: boolean;
    awdReduction: boolean;
}