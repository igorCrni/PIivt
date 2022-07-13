import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import SafetyModel from './SafetyModel.model';
import IAddSafety from './dto/IAddSafety.dto';

export interface ISafetyAdapterOptions extends IAdapterOptions{}

export default class SafetyService extends BaseService<SafetyModel, ISafetyAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<SafetyModel> {
        const safety: SafetyModel = new SafetyModel();

        safety.safetyId =              +data?.safety_id;
        safety.airbagDriver =           data?.airbagDriver;
        safety.airbagPass =             data?.airbagPass;
        safety.sideAirbag =             data?.sideAirbag;
        safety.childLock =              data?.childLock;
        safety.abs =                    data?.abs;
        safety.esp =                    data?.esp;
        safety.asr =                    data?.asr;
        safety.alarm =                  data?.alarm;
        safety.codedKey =               data?.codedKey;
        safety.engineLock =             data?.engineLock;
        safety.centralLocking =         data?.centralLocking;
        safety.mechanicalProtection =   data?.mechanicalProtection;
        safety.keyless =                data?.keyless;
        safety.laneAssist =             data?.laneAssist;
        safety.blindSpot =              data?.blindSpot;
        safety.obd =                    data?.obd;
        safety.kneeAirbags =            data?.kneeAirbags;
        safety.autoBraking =            data?.autoBraking;
        
        return safety;
    }

    public async add(data: IAddSafety): Promise<SafetyModel> {
        return this.baseAdd(data, {});
    }
}