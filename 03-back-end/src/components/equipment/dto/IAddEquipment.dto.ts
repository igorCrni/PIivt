import Ajv from 'ajv';
import IServiceData from '../../../common/IServiceData.interface';

const ajv = new Ajv();

export interface IAddEquipmentDto {
    metallic: boolean;
    cruise_control: boolean;
    panorama: boolean;
    mirror_heaters: boolean;
    fog_lights: boolean;
    parking_sensor: boolean;
    aluminium_wheels: boolean;
    radio_cd: boolean;
    windshield_heaters: boolean;
    auto_parking: boolean;
    head_up_display: boolean;
    multimedia: boolean;
    seat_memory: boolean;
    thresixty_camera: boolean;
    mp3: boolean;
    differential_lock: boolean;
    cup_holders: boolean;
    spare_tire: boolean;
    assistance_for_moving_uphills: boolean;
    apple_carplay: boolean;
    matrix_headlights: boolean;
    bumpers_in_the_color_of_the_car: boolean;
    remote_lock: boolean;
    tinted_glass: boolean;
    height_adjustable_seats: boolean;
    xenon_lights: boolean;
    webasto: boolean;
    navigation: boolean;
    camera: boolean;
    isofix: boolean;
    keyless_lgnition: boolean;
    start_stop_sistem: boolean;

}

export default interface IAddEquipment extends IServiceData {
    metallic: boolean;
    cruise_control: boolean;
    panorama: boolean;
    mirror_heaters: boolean;
    fog_lights: boolean;
    parking_sensor: boolean;
    aluminium_wheels: boolean;
    radio_cd: boolean;
    windshield_heaters: boolean;
    auto_parking: boolean;
    head_up_display: boolean;
    multimedia: boolean;
    seat_memory: boolean;
    thresixty_camera: boolean;
    mp3: boolean;
    differential_lock: boolean;
    cup_holders: boolean;
    spare_tire: boolean;
    assistance_for_moving_uphills: boolean;
    apple_carplay: boolean;
    matrix_headlights: boolean;
    bumpers_in_the_color_of_the_car: boolean;
    remote_lock: boolean;
    tinted_glass: boolean;
    height_adjustable_seats: boolean;
    xenon_lights: boolean;
    webasto: boolean;
    navigation: boolean;
    camera: boolean;
    isofix: boolean;
    keyless_lgnition: boolean;
    start_stop_sistem: boolean;

}   

const AddEquipmentSchema = {
    type: "object",
    properties: {
        metallic: {
            type: "boolean"
        },
        cruise_control: {
            type: "boolean"
        },
        panorama: {
            type: "boolean"
        },
        mirror_heaters: {
            type: "boolean"
        },
        fog_lights: {
            type: "boolean"
        },
        parking_sensor: {
            type: "boolean"
        },
        aluminium_wheels: {
            type: "boolean"
        },
        radio_cd: {
            type: "boolean"
        },
        windshield_heaters: {
            type: "boolean"
        },
        auto_parking: {
            type: "boolean"
        },
        head_up_display: {
            type: "boolean"
        },
        multimedia: {
            type: "boolean"
        },
        seat_memory: {
            type: "boolean"
        },
        thresixty_camera: {
            type: "boolean"
        },
        mp3: {
            type: "boolean"
        },
        differential_lock: {
            type: "boolean"
        },
        cup_holders: {
            type: "boolean"
        },
        spare_tire: {
            type: "boolean"
        },
        assistance_for_moving_uphills: {
            type: "boolean"
        },
        apple_carplay: {
            type: "boolean"
        },
        matrix_headlights: {
            type: "boolean"
        },
        bumpers_in_the_color_of_the_car: {
            type: "boolean"
        },
        remote_lock: {
            type: "boolean"
        },
        tinted_glass: {
            type: "boolean"
        },
        height_adjustable_seats: {
            type: "boolean"
        },
        xenon_lights: {
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
        keyless_lgnition: {
            type: "boolean"
        },
        start_stop_sistem: {
            type: "boolean"
        },
    },
    additionalProperties: false,
};

const AddEquipmentValidator = ajv.compile(AddEquipmentSchema);

export{AddEquipmentValidator};