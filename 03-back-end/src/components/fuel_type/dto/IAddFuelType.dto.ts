import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddFuelTypeDto {
    petrol: boolean;
    diesel: boolean;
    petrolTng: boolean;
    petrolCng: boolean;
    electric: boolean;
    hybrid: boolean;

}

export default interface IAddFuelType extends IServiceData {
    petrol: boolean;
    diesel: boolean;
    petrolTng: boolean;
    petrolCng: boolean;
    electric: boolean;
    hybrid: boolean;
}   

const AddFuelTypeSchema = {
    type: "object",
    properties: {
        petrol: {
            type: "boolean"
        },
        diesel: {
            type: "boolean"
        },
        petrolTng: {
            type: "boolean"
        },
        petrolCng: {
            type: "boolean"
        },
        electric: {
            type: "boolean"
        },
        hybrid: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddFuelTypeValidator = ajv.compile(AddFuelTypeSchema);

export{AddFuelTypeValidator};