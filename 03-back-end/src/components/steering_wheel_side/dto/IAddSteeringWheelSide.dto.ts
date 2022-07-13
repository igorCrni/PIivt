import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddSteeringWheelSideDto {
    left: boolean;
    right: boolean;

}

export default interface IAddSteeringWheelSide extends IServiceData {
    left: boolean;
    right: boolean;

}   

const AddSteeringWheelSideSchema = {
    type: "object",
    properties: {
        left: {
            type: "boolean"
        },
        right: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddSteeringWheelSideValidator = ajv.compile(AddSteeringWheelSideSchema);

export{AddSteeringWheelSideValidator};