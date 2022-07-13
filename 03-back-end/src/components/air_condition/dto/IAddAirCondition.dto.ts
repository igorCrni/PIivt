import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddAirConditionDto {
    no: boolean;
    manual: boolean;
    automatic: boolean;
    
}

export default interface IAddAirCondition extends IServiceData {
    no: boolean;
    manual: boolean;
    automatic: boolean;

}   

const AddAirConditionSchema = {
    type: "object",
    properties: {
        no: {
            type: "boolean"
        },
        manual: {
            type: "boolean"
        },
        automatic: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddAirConditionValidator = ajv.compile(AddAirConditionSchema);

export{AddAirConditionValidator};