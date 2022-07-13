import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import TransmissionModel from './TransmissionModel.model';
import IAddTransmission from './dto/IAddTransmission.dto';

export interface ITransmissionAdapterOptions extends IAdapterOptions{}

export default class TransmissionService extends BaseService<TransmissionModel, ITransmissionAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<TransmissionModel> {
        const transmission: TransmissionModel = new TransmissionModel();

        transmission.transmissionId =          +data?.transmission_id;
        transmission.manual4Speed =             data?.manual_4_speed;
        transmission.manual5Speed =             data?.manual_5_speed;
        transmission.manual6Speed =             data?.manual_6_speed;
        transmission.automaticSemiauto =        data?.automatic_semiauto;

        return transmission;
    }

    public async add(data: IAddTransmission): Promise<TransmissionModel> {
        return this.baseAdd(data, {});
    }
}