import IModel from '../../common/IModel.inteface';

export default class DamageModel implements IModel {
    damageId: number;
    notDamaged: boolean;
    damagedRunning: boolean;
    damagedNotRunning: boolean;
}