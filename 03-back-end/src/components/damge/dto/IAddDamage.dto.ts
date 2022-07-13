import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddDamageDto {
    not_damaged: boolean;
    damaged_running: boolean;
    damaged_not_running: boolean;
    
}

export default interface IAddDamage extends IServiceData {
    not_damaged: boolean;
    damaged_running: boolean;
    damaged_not_running: boolean;

}   

const AddDamageSchema = {
    type: "object",
    properties: {
        not_damaged: {
            type: "boolean"
        },
        damaged_running: {
            type: "boolean"
        },
        damaged_not_running: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddDamageValidator = ajv.compile(AddDamageSchema);

export{AddDamageValidator};