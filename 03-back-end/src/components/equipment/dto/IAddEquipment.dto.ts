import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddEquipmentDto {
    metallic: boolean;
    cruiseControl: boolean;
    panorama: boolean;
    mirrorHeaters: boolean;
    fogLights: boolean;
    parkingSensor: boolean;
    aluminiumWheels: boolean;
    radioCd: boolean;
    windshieldHeaters: boolean;
    autoParking: boolean;
    headUpDisplay: boolean;
    multimedia: boolean;
    seatMemory: boolean;
    thresixtyCamera: boolean;
    mp3: boolean;
    differentialLock: boolean;
    cupHolders: boolean;
    spareTire: boolean;
    assistanceForMovingUphills: boolean;
    appleCarplay: boolean;
    matrixHeadlights: boolean;
    bumpersInTheColorOfTheCar: boolean;
    remoteLock: boolean;
    tintedGlass: boolean;
    heightAdjustableSeats: boolean;
    xenonLights: boolean;
    webasto: boolean;
    navigation: boolean;
    camera: boolean;
    isofix: boolean;
    keylessIgnition: boolean;
    startStopSistem: boolean;

}

export default interface IAddEquipment extends IServiceData {
    metallic: boolean;
    cruiseControl: boolean;
    panorama: boolean;
    mirrorHeaters: boolean;
    fogLights: boolean;
    parkingSensor: boolean;
    aluminiumWheels: boolean;
    radioCd: boolean;
    windshieldHeaters: boolean;
    autoParking: boolean;
    headUpDisplay: boolean;
    multimedia: boolean;
    seatMemory: boolean;
    thresixtyCamera: boolean;
    mp3: boolean;
    differentialLock: boolean;
    cupHolders: boolean;
    spareTire: boolean;
    assistanceForMovingUphills: boolean;
    appleCarplay: boolean;
    matrixHeadlights: boolean;
    bumpersInTheColorOfTheCar: boolean;
    remoteLock: boolean;
    tintedGlass: boolean;
    heightAdjustableSeats: boolean;
    xenonLights: boolean;
    webasto: boolean;
    navigation: boolean;
    camera: boolean;
    isofix: boolean;
    keylessIgnition: boolean;
    startStopSistem: boolean;

}   

const AddEquipmentSchema = {
    type: "object",
    properties: {
        metallic: {
            type: "boolean"
        },
        cruiseControl: {
            type: "boolean"
        },
        panorama: {
            type: "boolean"
        },
        mirrorHeaters: {
            type: "boolean"
        },
        fogLights: {
            type: "boolean"
        },
        parkingSensor: {
            type: "boolean"
        },
        aluminiumWheels: {
            type: "boolean"
        },
        radioCd: {
            type: "boolean"
        },
        windshieldHeaters: {
            type: "boolean"
        },
        autoParking: {
            type: "boolean"
        },
        headUpDisplay: {
            type: "boolean"
        },
        multimedia: {
            type: "boolean"
        },
        seatMemory: {
            type: "boolean"
        },
        thresixtyCamera: {
            type: "boolean"
        },
        mp3: {
            type: "boolean"
        },
        differentialLock: {
            type: "boolean"
        },
        cupHolders: {
            type: "boolean"
        },
        spareTire: {
            type: "boolean"
        },
        assistanceForMovingUphills: {
            type: "boolean"
        },
        appleCarplay: {
            type: "boolean"
        },
        matrixHeadlights: {
            type: "boolean"
        },
        bumpersInTheColorOfTheCar: {
            type: "boolean"
        },
        remoteLock: {
            type: "boolean"
        },
        tintedGlass: {
            type: "boolean"
        },
        heightAdjustableSeats: {
            type: "boolean"
        },
        xenonLights: {
            type: "boolean"
        },
        webasto: {
            type: "boolean"
        },
        navigation: {
            type: "boolean"
        },
        camera: {
            type: "boolean"
        },
        isofix: {
            type: "boolean"
        },
        keylessIgnition: {
            type: "boolean"
        },
        startStopSistem: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddEquipmentValidator = ajv.compile(AddEquipmentSchema);

export{AddEquipmentValidator};