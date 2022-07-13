import IModel from '../../common/IModel.inteface';

export default class TransmissionModel implements IModel {
    transmissionId: number;
    manual4Speed: boolean;
    manual5Speed: boolean;
    manual6Speed: boolean;
    automaticSemiauto: boolean;
}