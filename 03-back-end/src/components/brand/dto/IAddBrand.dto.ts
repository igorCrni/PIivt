import Ajv from "ajv";

const ajv = new Ajv();

export default interface IAddBrand {
    name: string;
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
