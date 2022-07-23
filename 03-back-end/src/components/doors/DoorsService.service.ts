import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import DoorsModel from './DoorsModel.model';

class DoorsAdapterOptions implements IAdapterOptions {

}

class DoorsService extends BaseService<DoorsModel, DoorsAdapterOptions> {
    tableName(): string {
        return "doors";
    }

    protected async adaptToModel(data: any): Promise<DoorsModel> {
        const doors: DoorsModel = new DoorsModel();

        doors.doorsId = +data?.doors_id;
        doors.name = data?.name;

        return doors;
    }
}

export default DoorsService;