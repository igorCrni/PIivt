import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import TransmissionModel from './TransmissionModel.model';

class TransmissionAdapterOptions implements IAdapterOptions {

}

class TransmissionService extends BaseService<TransmissionModel, TransmissionAdapterOptions> {
    tableName(): string {
        return "transmission";
    }

    protected async adaptToModel(data: any): Promise<TransmissionModel> {
        const transmission: TransmissionModel = new TransmissionModel();

        transmission.transmissionId = +data?.transmission_id;
        transmission.name = data?.name;

        return transmission;
    }
}

export default TransmissionService;