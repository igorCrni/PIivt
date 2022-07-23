import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import DamageModel from './DamageModel.model';

class DamageAdapterOptions implements IAdapterOptions {

}

class DamageService extends BaseService<DamageModel, DamageAdapterOptions> {
    tableName(): string {
        return "damage";
    }

    protected async adaptToModel(data: any): Promise<DamageModel> {
        const damage: DamageModel = new DamageModel();

        damage.damageId = +data?.damage_id;
        damage.name = data?.name;

        return damage;
    }
}

export default DamageService;