import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import ReplacementModel from './ReplacementModel.model';

class ReplacementAdapterOptions implements IAdapterOptions {

}

class ReplacementService extends BaseService<ReplacementModel, ReplacementAdapterOptions> {
    tableName(): string {
        return "replacement";
    }

    protected async adaptToModel(data: any): Promise<ReplacementModel> {
        const replacement: ReplacementModel = new ReplacementModel();

        replacement.replacementId = +data?.replacement_id;
        replacement.name = data?.name;

        return replacement;
    }
}

export default ReplacementService;