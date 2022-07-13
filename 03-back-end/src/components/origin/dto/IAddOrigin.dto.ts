import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddOriginDto {
    domesticTag: boolean;
    onCustomer: boolean;
    foreginTag: boolean;
    
}

export default interface IAddOrigin extends IServiceData {
    domesticTag: boolean;
    onCustomer: boolean;
    foreginTag: boolean;

}   

const AddOriginSchema = {
    type: "object",
    properties: {
        domesticTag: {
            type: "boolean"
        },
        onCustomer: {
            type: "boolean"
        },
        foreginTag: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddOriginValidator = ajv.compile(AddOriginSchema);

export{AddOriginValidator};