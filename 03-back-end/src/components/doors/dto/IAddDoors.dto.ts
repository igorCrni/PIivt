import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddDoorsDto {
    twoThree: boolean;
    fourFive: boolean;

}

export default interface IAddDoors extends IServiceData {
    twoThree: boolean;
    fourFive: boolean;
}   

const AddDoorsSchema = {
    type: "object",
    properties: {
        twoThree: {
            type: "boolean"
        },
        fourFive: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddDoorsValidator = ajv.compile(AddDoorsSchema);

export{AddDoorsValidator};