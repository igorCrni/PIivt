import Ajv from "ajv";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();

export interface IAddBrandDto {
    name: string;
}

export default interface IAddBrand extends IServiceData{
    name: string;
    category_id: number;
}

const AddBrandSchema = {
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

const AddBrandValidator = ajv.compile(AddBrandSchema);

export{AddBrandValidator};
