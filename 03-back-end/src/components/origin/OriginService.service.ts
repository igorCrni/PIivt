import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import OriginModel from './OriginModel.model';
import IAddOrigin from './dto/IAddOrigin.dto';

export interface IOriginAdapterOptions extends IAdapterOptions{}

export default class OriginService extends BaseService<OriginModel, IOriginAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<OriginModel> {
        const origin: OriginModel = new OriginModel();

        origin.originId =           +data?.origin_id;
        origin.domesticTag =         data?.domestic_tag;
        origin.onCustomer =          data?.on_customer;
        origin.foreginTag =          data?.foregin_tag;
        
        return origin;
    }

    public async add(data: IAddOrigin): Promise<OriginModel> {
        return this.baseAdd(data, {});
    }
}