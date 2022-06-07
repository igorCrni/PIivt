import Ajv from "ajv";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();

export interface IEditModelDto {
    name: string;
}

export default interface IEditModel extends IServiceData{
    name: string;
    brand_id: number;
}

const EditModelSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 1,
            maxLength: 128,
        },
    },
    required: [
        "name",
    ],
    additionalProperties: false,
};

const EditModelValidator = ajv.compile(EditModelSchema);

export{EditModelValidator};
