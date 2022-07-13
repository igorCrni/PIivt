import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddDoorsDto {
    two_three: boolean;
    four_five: boolean;

}

export default interface IAddDoors extends IServiceData {
    two_three: boolean;
    four_five: boolean;

}   

const AddDoorsSchema = {
    type: "object",
    properties: {
        two_three: {
            type: "boolean"
        },
        four_five: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddDoorsValidator = ajv.compile(AddDoorsSchema);

export{AddDoorsValidator};