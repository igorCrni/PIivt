import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import SeatsModel from './SeatsModel.model';

class SeatsAdapterOptions implements IAdapterOptions {

}

class SeatsService extends BaseService<SeatsModel, SeatsAdapterOptions> {
    tableName(): string {
        return "seats";
    }

    protected async adaptToModel(data: any): Promise<SeatsModel> {
        const seats: SeatsModel = new SeatsModel();

        seats.seatsId = +data?.seats_id;
        seats.name = data?.name;

        return seats;
    }
}

export default SeatsService;