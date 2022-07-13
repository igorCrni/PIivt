import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import DoorsModel from './DoorsModel.model';
import IAddDoors from './dto/IAddDoors.dto';

export interface IDoorsAdapterOptions extends IAdapterOptions{}

export default class DoorsService extends BaseService<DoorsModel, IDoorsAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<DoorsModel> {
        const doors: DoorsModel = new DoorsModel();

        doors.doorsId =          +data?.doors_id;
        doors.twoThree =          data?.two_three;
        doors.fourFive =          data?.four_five;

        return doors;
    }

    public async add(data: IAddDoors): Promise<DoorsModel> {
        return this.baseAdd(data, {});
    }
}