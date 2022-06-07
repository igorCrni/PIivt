import Ajv from "ajv";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();

export interface IAddModelDto {
    name: string;
}

export default interface IAddModel extends IServiceData{
    name: string;
    brand_id: number;
}

const AddModelSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 2,
            maxLength: 128,
        },
    },
    required: [
        "name",
    ],
    additionalProperties: false,
};

const AddModelValidator = ajv.compile(AddModelSchema);

export{AddModelValidator};
