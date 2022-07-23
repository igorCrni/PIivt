import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import OriginModel from './OriginModel.model';

class OriginAdapterOptions implements IAdapterOptions {

}

class OriginService extends BaseService<OriginModel, OriginAdapterOptions> {
    tableName(): string {
        return "origin";
    }

    protected async adaptToModel(data: any): Promise<OriginModel> {
        const origin: OriginModel = new OriginModel();

        origin.originId = +data?.origin_id;
        origin.name = data?.name;

        return origin;
    }
}

export default OriginService;