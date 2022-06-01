import Ajv from "ajv";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();

export interface IEditBrandDto {
    name: string;
}

export default interface IEditBrand extends IServiceData{
    name: string;
    category_id: number;
}

const EditBrandSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 3,
            maxLength: 128,
        },
    },
    required: [
        "name",
    ],
    additionalProperties: false,
};

const EditBrandValidator = ajv.compile(EditBrandSchema);

export{EditBrandValidator};
