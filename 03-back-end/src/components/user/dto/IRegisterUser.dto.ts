import Ajv from "ajv";
import addFormats from "ajv-formats";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();
addFormats(ajv);

export interface IRegisterUserDto{
    email: string;
    password: string;
    forename: string;
    surname: string;
    city: string;
    phoneNumber: string;
}

export interface IAddUser extends IServiceData {
    email: string;
    password_hash: string;
    forename: string;
    surname: string;
    city: string;
    phone_number: string;
    activation_code: string;
}

const RegisterUserValidator = ajv.compile({
    type: "object",
    properties: {
        email: {
            type: "string",
            format: "email",
        },
        password: {
            type: "string",
            pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$",
        },
        forename: {
            type: "string",
            minLength: 2,
            maxLength: 64,
        },
        surname: {
            type: "string",
            minLength: 2,
            maxLength: 64,
        },
        city: {
            type: "string",
            minLength: 2,
            maxLength: 64,
        },
        phoneNumber: {
            type: "string",
            minLength: 0,
            maxLength: 24,
        }
    },
    required: [
        "email",
        "password",
        "forename",
        "surname",
        "city",
        "phoneNumber",
    ],
    additionalProperties: false,
});

export { RegisterUserValidator};