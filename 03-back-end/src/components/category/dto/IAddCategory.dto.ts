import Ajv from "ajv";

const ajv = new Ajv();

export default interface IAddCategory {
    name: string;
}

interface IAddCategoryServiceDto {
    name: string;
    categoryId: number;
}

const AddCategorySchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 4,
            maxLength: 32,
        },
    },
    required: [
        "name",
    ],
    additionalProperties: false,
};

const AddCategoryValidator = ajv.compile(AddCategorySchema);

export{AddCategoryValidator, IAddCategoryServiceDto};
