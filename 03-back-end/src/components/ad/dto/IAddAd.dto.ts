import Ajv from "ajv";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();

export interface IAddAdDto {
    carBody: string;
    fuelType: string;
    drive: string;
    transmission: string;
    doors: string;
    seats: string;
    steeringWheelSide: string;
    airCondition: string;
    damage: string;
    origin: string;
    safety: string;
    equipment: string;
    vehicleCondition: string;
    emissionClass: string;
    interiorMaterial: string;
    replacement: string;
    title: string;
    price: number;
    fixed: boolean;
    year: string;
    mark: string;
    cm3: string;
    kw: string;
    ks: string;
    mileage:string;
    color: string;
    interiorColor: string;
    registrationUntil: string;
    description: string;
}

export default interface IAddAd extends IServiceData {
    category_id: number;
    brand_id: number;
    model_id:number;
    user_id:number;
    car_body: string;
    fuel_type: string;
    drive: string;
    transmission: string;
    doors: string;
    seats: string;
    steering_wheel_side: string;
    air_condition: string;
    damage: string;
    origin: string;
    safety: string;
    equipment: string;
    vehicle_condition: string;
    emission_class: string;
    interior_material: string;
    replacement: string;
    title: string;
    price: number;
    fixed: boolean;
    year: string;
    mark: string;
    cm3: string;
    kw: string;
    ks: string;
    mileage:string;
    color: string;
    interior_color: string;
    registration_until: string;
    description: string;
}

const AddAdValidator = ajv.compile({
    type: "object",
    properties: {
        carBody: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        fuelType: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        drive: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        transmission: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        doors: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        seats: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        steeringWheelSide: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        airCondition: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        damage: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        origin: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        safety: {
            type: "string",
            minLength: 0,
            maxLength: 500,
        },
        equipment: {
            type: "string",
            minLength: 0,
            maxLength: 500,
        },
        vehicleCondition: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        emissionClass: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        interiorMaterial: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        replacement: {
            type: "string",
            minLength: 4,
            maxLength: 125,
        },
        title: {
            type: "string",
            minLength: 4,
            maxLength: 64,
        },
        price: {
            type: "number",
            multipleOf: 0.01,
            minimum: 0.01,
        },
        fixed: {
            type: "boolean",
        },
        year: {
            type: "string",
            minLength: 1,
            maxLength: 4,
        },
        mark: {
            type: "string",
            minLength: 4,
            maxLength: 64,
        },
        cm3: {
            type: "string",
            minLength: 4,
            maxLength: 64,
        },
        kw: {
            type: "string",
            minLength: 1,
            maxLength: 12,
        },
        ks: {
            type: "string",
            minLength: 1,
            maxLength: 12,
        },
        mileage: {
            type: "string",
            minLength: 1,
            maxLength: 25,
        },
        color: {
            type: "string",
            minLength: 1,
            maxLength: 25,
        },
        interiorColor: {
            type: "string",
            minLength: 1,
            maxLength: 25,
        },
        registrationUntil: {
            type: "string",
            minLength: 1,
            maxLength: 12,
        },
        description: {
            type: "string",
            minLength: 0,
            maxLength: 500,
        },
    },
    required: [
        "carBody",
        "fuelType",
        "drive",
        "transmission",
        "doors",
        "seats",
        "steeringWheelSide",
        "airCondition",
        "damage",
        "origin",
        "vehicleCondition",
        "emissionClass",
        "title",
        "price",
        "year",
        "mark",
        "cm3",
        "kw",
        "ks",
        "mileage",
        "color",
    ],
    additionalProperties:false,
});

export {AddAdValidator};