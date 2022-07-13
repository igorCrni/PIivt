import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddVehicleConditionDto {
    first_owner: boolean;
    servis_book: boolean;
    adapted_for_the_disabled: boolean;
    driving_school_vehicle: boolean;
    spare_key: boolean;
    taxi: boolean;
    restored: boolean;
    test_vehicle: boolean;
    garaged: boolean;
    oldtimer: boolean;
    tuning: boolean;

}

export default interface IAddVehicleCondition extends IServiceData {
    first_owner: boolean;
    servis_book: boolean;
    adapted_for_the_disabled: boolean;
    driving_school_vehicle: boolean;
    spare_key: boolean;
    taxi: boolean;
    restored: boolean;
    test_vehicle: boolean;
    garaged: boolean;
    oldtimer: boolean;
    tuning: boolean;

}   

const AddVehicleConditionSchema = {
    type: "object",
    properties: {
        first_owner: {
            type: "boolean"
        },
        servis_book: {
            type: "boolean"
        },
        adapted_for_the_disabled: {
            type: "boolean"
        },
        driving_school_vehicle: {
            type: "boolean"
        },
        spare_key: {
            type: "boolean"
        },
        taxi: {
            type: "boolean"
        },
        restored: {
            type: "boolean"
        },
        test_vehicle: {
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