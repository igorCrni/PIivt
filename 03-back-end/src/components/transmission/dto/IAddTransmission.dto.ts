import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddTransmissionDto {
    manual4Speed: boolean;
    manual5Speed: boolean;
    manual6Speed: boolean;
    automaticSemiauto: boolean;

}

export default interface IAddTransmission extends IServiceData {
    manual4Speed: boolean;
    manual5Speed: boolean;
    manual6Speed: boolean;
    automaticSemiauto: boolean;
}   

const AddTransmissionSchema = {
    type: "object",
    properties: {
        manual4Speed: {
            type: "boolean"
        },
        manual5Speed: {
            type: "boolean"
        },
        manual6Speed: {
            type: "boolean"
        },
        automaticSemiauto: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddTransmissionValidator = ajv.compile(AddTransmissionSchema);

export{AddTransmissionValidator};