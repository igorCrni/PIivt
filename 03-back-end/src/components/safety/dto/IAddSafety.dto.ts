import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddSafetyDto {
    airbag_driver: boolean;
    airbag_pass: boolean;
    side_airbag: boolean;
    child_lock: boolean;
    abs: boolean;
    esp: boolean;
    asr: boolean;
    alarm: boolean;
    coded_key: boolean;
    engine_lock: boolean;
    central_locking: boolean;
    mechanical_protection: boolean;
    keyless: boolean;
    lane_assist: boolean;
    blind_spot: boolean;
    obd: boolean;
    knee_airbags: boolean;
    auto_braking: boolean;
    
}

export default interface IAddSafety extends IServiceData {
    airbag_driver: boolean;
    airbag_pass: boolean;
    side_airbag: boolean;
    child_lock: boolean;
    abs: boolean;
    esp: boolean;
    asr: boolean;
    alarm: boolean;
    coded_key: boolean;
    engine_lock: boolean;
    central_locking: boolean;
    mechanical_protection: boolean;
    keyless: boolean;
    lane_assist: boolean;
    blind_spot: boolean;
    obd: boolean;
    knee_airbags: boolean;
    auto_braking: boolean;

}   

const AddSafetySchema = {
    type: "object",
    properties: {
        airbag_driver: {
            type: "boolean"
        },
        airbag_pass: {
            type: "boolean"
        },
        side_airbag: {
            type: "boolean"
        },
        child_lock: {
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
        coded_key: {
            type: "boolean"
        },
        engine_lock: {
            type: "boolean"
        },
        central_locking: {
            type: "boolean"
        },
        mechanical_protection: {
            type: "boolean"
        },
        keyless: {
            type: "boolean"
        },
        lane_assist: {
            type: "boolean"
        },
        blind_spot: {
            type: "boolean"
        },
        obd: {
            type: "boolean"
        },
        knee_airbags: {
            type: "boolean"
        },
        auto_braking: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddSafetyValidator = ajv.compile(AddSafetySchema);

export{AddSafetyValidator};