import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddSafetyDto {
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

export default interface IAddSafety extends IServiceData {
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

const AddSafetySchema = {
    type: "object",
    properties: {
        airbagDriver: {
            type: "boolean"
        },
        airbagPass: {
            type: "boolean"
        },
        sideAirbag: {
            type: "boolean"
        },
        childLock: {
            type: "boolean"
        },
        abs: {
            type: "boolean"
        },
        esp: {
            type: "boolean"
        },
        asr: {
            type: "boolean"
        },
        alarm: {
            type: "boolean"
        },
        codedKey: {
            type: "boolean"
        },
        engineLock: {
            type: "boolean"
        },
        centralLocking: {
            type: "boolean"
        },
        mechanicalProtection: {
            type: "boolean"
        },
        keyless: {
            type: "boolean"
        },
        laneAssist: {
            type: "boolean"
        },
        blindSpot: {
            type: "boolean"
        },
        obd: {
            type: "boolean"
        },
        kneeAirbags: {
            type: "boolean"
        },
        autoBraking: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddSafetyValidator = ajv.compile(AddSafetySchema);

export{AddSafetyValidator};