import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddVehicleConditionDto {
    firstOwner: boolean;
    servisBook: boolean;
    adaptedForTheDisabled: boolean;
    drivingSchoolVehicle: boolean;
    spareKey: boolean;
    taxi: boolean;
    restored: boolean;
    testVehicle: boolean;
    garaged: boolean;
    oldtimer: boolean;
    tuning: boolean;

}

export default interface IAddVehicleCondition extends IServiceData {
    firstOwner: boolean;
    servisBook: boolean;
    adaptedForTheDisabled: boolean;
    drivingSchoolVehicle: boolean;
    spareKey: boolean;
    taxi: boolean;
    restored: boolean;
    testVehicle: boolean;
    garaged: boolean;
    oldtimer: boolean;
    tuning: boolean;

}   

const AddVehicleConditionSchema = {
    type: "object",
    properties: {
        firstOwner: {
            type: "boolean"
        },
        servisBook: {
            type: "boolean"
        },
        adaptedForTheDisabled: {
            type: "boolean"
        },
        drivingSchoolVehicle: {
            type: "boolean"
        },
        spareKey: {
            type: "boolean"
        },
        taxi: {
            type: "boolean"
        },
        restored: {
            type: "boolean"
        },
        testVehicle: {
            type: "boolean"
        },
        garaged: {
            type: "boolean"
        },
        oldtimer: {
            type: "boolean"
        },
        tuning: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddVehicleConditionValidator = ajv.compile(AddVehicleConditionSchema);

export{AddVehicleConditionValidator};