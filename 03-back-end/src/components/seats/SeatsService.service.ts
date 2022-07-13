import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import SeatsModel from './SeatsModel.model';
import IAddSeats from './dto/IAddSeats.dto';

export interface ISeatsAdapterOptions extends IAdapterOptions{}

export default class SeatsService extends BaseService<SeatsModel, ISeatsAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<SeatsModel> {
        const seats: SeatsModel = new SeatsModel();

        seats.seatsId =          +data?.seats_id;
        seats.two =          data?.two;
        seats.three =          data?.three;
        seats.four =          data?.four;
        seats.five =          data?.five;
        seats.six =          data?.six;
        seats.seven =          data?.seven;
        seats.eight =          data?.eight;
        seats.nine =          data?.nine;
        
        return seats;
    }

    public async add(data: IAddSeats): Promise<SeatsModel> {
        return this.baseAdd(data, {});
    }
}