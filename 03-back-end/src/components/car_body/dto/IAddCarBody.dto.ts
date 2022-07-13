import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddCarBodyDto {
    sedan: boolean;
    hatchback: boolean;
    cupe: boolean;
    station_wagon: boolean;
    convertible: boolean;
    minivan: boolean;
    suv: boolean;
    pickup: boolean;

}

export default interface IAddCarBody extends IServiceData {
    sedan: boolean;
    hatchback: boolean;
    cupe: boolean;
    station_wagon: boolean;
    convertible: boolean;
    minivan: boolean;
    suv: boolean;
    pickup: boolean;
}

const AddCarBodySchema = {
    type: "object",
    properties: {
        sedan: {
            type: "boolean"
        },
        hatchback: {
            type: "boolean"
        },
        cupe: {
            type: "boolean"
        },
        station_wagon: {
            type: "boolean"
        },
        convertible: {
            type: "boolean"
        },
        minivan: {
            type: "boolean"
        },
        suv: {
            type: "boolean"
        },
        pickup: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddCarBodyValidator = ajv.compile(AddCarBodySchema);

export{AddCarBodyValidator};