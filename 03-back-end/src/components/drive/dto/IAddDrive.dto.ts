import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddDriveDto {
    fwd: boolean;
    rwd: boolean;
    awd: boolean;
    awd_reduction: boolean;

}

export default interface IAddDrive extends IServiceData {
    fwd: boolean;
    rwd: boolean;
    awd: boolean;
    awd_reduction: boolean;
}   

const AddDriveSchema = {
    type: "object",
    properties: {
        fwd: {
            type: "boolean"
        },
        rwd: {
            type: "boolean"
        },
        awd: {
            type: "boolean"
        },
        awd_reduction: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddDriveValidator = ajv.compile(AddDriveSchema);

export{AddDriveValidator};