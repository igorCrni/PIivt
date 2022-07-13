import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddSeatsDto {
    two: boolean;
    three: boolean;
    four: boolean;
    five: boolean;
    six: boolean;
    seven: boolean;
    eight: boolean;
    nine: boolean;

}

export default interface IAddSeats extends IServiceData {
    two: boolean;
    three: boolean;
    four: boolean;
    five: boolean;
    six: boolean;
    seven: boolean;
    eight: boolean;
    nine: boolean;

}   

const AddSeatsSchema = {
    type: "object",
    properties: {
        two: {
            type: "boolean"
        },
        three: {
            type: "boolean"
        },
        four: {
            type: "boolean"
        },
        five: {
            type: "boolean"
        },
        six: {
            type: "boolean"
        },
        fourFive: {
            type: "boolean"
        },
        seven: {
            type: "boolean"
        },
        eight: {
            type: "boolean"
        },
        nine: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddSeatsValidator = ajv.compile(AddSeatsSchema);

export{AddSeatsValidator};