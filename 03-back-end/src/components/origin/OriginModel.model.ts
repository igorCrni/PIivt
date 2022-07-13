import IModel from '../../common/IModel.inteface';

export default class OriginModel implements IModel {
    originId: number;
    domesticTag: boolean;
    onCustomer: boolean;
    foreginTag: boolean;
}