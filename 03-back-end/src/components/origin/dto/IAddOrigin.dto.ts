import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddOriginDto {
    domestic_tag: boolean;
    on_customer: boolean;
    foregin_tag: boolean;
    
}

export default interface IAddOrigin extends IServiceData {
    domestic_tag: boolean;
    on_customer: boolean;
    foregin_tag: boolean;

}   

const AddOriginSchema = {
    type: "object",
    properties: {
        domestic_tag: {
            type: "boolean"
        },
        on_customer: {
            type: "boolean"
        },
        foregin_tag: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddOriginValidator = ajv.compile(AddOriginSchema);

export{AddOriginValidator};