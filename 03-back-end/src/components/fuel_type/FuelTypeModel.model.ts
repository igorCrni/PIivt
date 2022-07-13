import IModel from '../../common/IModel.inteface';

export default class FuelTypeModel implements IModel {
    fuelTypeId: number;
    petrol: boolean;
    diesel: boolean;
    petrolTng: boolean;
    petrolCng: boolean;
    electric: boolean;
    hybrid: boolean;
}