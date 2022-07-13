import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import DamageModel from './DamageModel.model';
import IAddDamage from './dto/IAddDamage.dto';

export interface IDamageAdapterOptions extends IAdapterOptions{}

export default class DamageService extends BaseService<DamageModel, IDamageAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<DamageModel> {
        const damage: DamageModel = new DamageModel();

        damage.damageId =           +data?.damage_id;
        damage.notDamaged =          data?.not_damaged;
        damage.damagedRunning =      data?.damaged_running;
        damage.damagedNotRunning =   data?.damaged_not_running;
        
        return damage;
    }

    public async add(data: IAddDamage): Promise<DamageModel> {
        return this.baseAdd(data, {});
    }
}