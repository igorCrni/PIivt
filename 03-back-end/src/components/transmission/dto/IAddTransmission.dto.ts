import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddTransmissionDto {
    manual_4_speed: boolean;
    manual_5_speed: boolean;
    manual_6_speed: boolean;
    automatic_semiauto: boolean;

}

export default interface IAddTransmission extends IServiceData {
    manual_4_speed: boolean;
    manual_5_speed: boolean;
    manual_6_speed: boolean;
    automatic_semiauto: boolean;
}   

const AddTransmissionSchema = {
    type: "object",
    properties: {
        manual_4_speed: {
            type: "boolean"
        },
        manual_5_speed: {
            type: "boolean"
        },
        manual_6_speed: {
            type: "boolean"
        },
        automatic_semiauto: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddTransmissionValidator = ajv.compile(AddTransmissionSchema);

export{AddTransmissionValidator};