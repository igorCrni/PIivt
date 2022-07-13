import IModel from '../../common/IModel.inteface';

export default class SafetyModel implements IModel {
    safetyId: number;
    airbagDriver: boolean;
    airbagPass: boolean;
    sideAirbag: boolean;
    childLock: boolean;
    abs: boolean;
    esp: boolean;
    asr: boolean;
    alarm: boolean;
    codedKey: boolean;
    engineLock: boolean;
    centralLocking: boolean;
    mechanicalProtection: boolean;
    keyless: boolean;
    laneAssist: boolean;
    blindSpot: boolean;
    obd: boolean;
    kneeAirbags: boolean;
    autoBraking: boolean;
}