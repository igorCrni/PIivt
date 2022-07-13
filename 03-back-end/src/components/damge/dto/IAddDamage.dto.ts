import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddDamageDto {
    notDamaged: boolean;
    damagedRunning: boolean;
    damagedNotRunning: boolean;
    
}

export default interface IAddDamage extends IServiceData {
    notDamaged: boolean;
    damagedRunning: boolean;
    damagedNotRunning: boolean;

}   

const AddDamageSchema = {
    type: "object",
    properties: {
        notDamaged: {
            type: "boolean"
        },
        damagedRunning: {
            type: "boolean"
        },
        damagedNotRunning: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddDamageValidator = ajv.compile(AddDamageSchema);

export{AddDamageValidator};