import Ajv from "ajv";
import IServiceData from "../../../common/IServiceData.interface";

const ajv = new Ajv();

export interface IAddAdDto {
    carBodyId: number;
    fuelTypeId: number;
    driveId: number;
    transmissionId: number;
    doorsId: number;
    seatsId: number;
    steeringWheelSideId: number;
    airConditionId:number;
    damageId:number;
    originId: number;
    safetyIds: number[];
    equipmentIds: number[];
    vehicleConditionIds: number[];
    emissionClassId: number;
    interiorMaterialId: number;
    replacementId: number;
    title: string;
    price: number;
    year: string;
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
    car_body_id: number;
    fuel_type_id: number;
    drive_id: number;
    transmission_id: number;
    doors_id: number;
    seats_id: number;
    steering_wheel_side_id: number;
    air_condition_id: number;
    damage_id: number;
    origin_id: number;
    emission_class_id: number;
    interior_material_id: number;
    replacement_id: number;
    title: string;
    price: number;
    year: string;
    cm3: string;
    kw: string;
    ks: string;
    mileage:string;
    color: string;
    interior_color: string;
    registration_until: string;
    description: string;
}

export interface IAdEquipment extends IServiceData {
    ad_id: number;
    equipment_id: number;
}
export interface IAdSafety extends IServiceData {
    ad_id: number;
    safety_id: number;
}
export interface IAdVehicleCondition extends IServiceData {
    ad_id: number;
    vehicle_condition_id: number;
}

const AddAdValidator = ajv.compile({
    type: "object",
    properties: {
        carBodyId: {
            type: "integer",
        },
        fuelTypeId: {
            type: "integer",
        },
        driveId: {
            type: "integer",
        },
        transmissionId: {
            type: "integer",
        },
        doorsId: {
            type: "integer",
        },
        seatsId: {
            type: "integer",
        },
        steeringWheelSideId: {
            type: "integer",
        },
        airConditionId: {
            type: "integer",
        },
        damageId: {
            type: "integer",
        },
        originId: {
            type: "integer",
        },
        equipmentIds: {
            type: "array",
            minItems: 0,
            uniqueItems: true,
            items: {
                type: "integer",
            },
        },
        safetyIds: {
            type: "array",
            minItems: 0,
            uniqueItems: true,
            items: {
                type: "integer",
            },
        },
        vehicleConditionIds: {
            type: "array",
            minItems: 0,
            uniqueItems: true,
            items: {
                type: "integer",
            },
        },
        emissionClassId: {
            type: "integer",
        },
        interiorMaterialId: {
            type: "integer",
        },
        replacementId: {
            type: "integer",
        },
        title: {
            type: "string",
            minLength: 4,
            maxLength: 64,
        },
        price: {
            type: "number",
            multipleOf: 0.01,
            minimum: 0.00,
        },
        year: {
            type: "string",
            minLength: 1,
            maxLength: 4,
        },
        cm3: {
            type: "string",
            minLength: 1,
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
            minLength: 0,
            maxLength: 12,
        },
        description: {
            type: "string",
            minLength: 0,
            maxLength: 500,
        },
    },
    required: [
        "carBodyId",
        "fuelTypeId",
        "driveId",
        "transmissionId",
        "doorsId",
        "seatsId",
        "steeringWheelSideId",
        "airConditionId",
        "damageId",
        "originId",
        "emissionClassId",
        "title",
        "price",
        "year",
        "cm3",
        "kw",
        "ks",
        "mileage",
        "color",
    ],
    additionalProperties:false,
});

export {AddAdValidator};