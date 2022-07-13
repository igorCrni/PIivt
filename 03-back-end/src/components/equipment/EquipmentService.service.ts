import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import EquipmentModel from './EquipmentModel.model';
import IAddEquipment from './dto/IAddEquipment.dto';

export interface IEquipmentAdapterOptions extends IAdapterOptions{}

export default class EquipmentService extends BaseService<EquipmentModel, IEquipmentAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<EquipmentModel> {
        const equipment: EquipmentModel = new EquipmentModel();

        equipment.equipmentId =                  +data?.equipment_id;
        equipment.metallic =                      data?.metallic;
        equipment.cruiseControl =                 data?.cruise_control;
        equipment.panorama =                      data?.panorama;
        equipment.mirrorHeaters =                 data?.mirror_heaters;
        equipment.fogLights =                     data?.fog_lights;
        equipment.parkingSensor =                 data?.parking_sensor;
        equipment.aluminiumWheels =               data?.aluminium_wheels;
        equipment.radioCd =                       data?.radio_cd;
        equipment.windshieldHeaters =             data?.windshield_heaters;
        equipment.autoParking =                   data?.auto_parking;
        equipment.headUpDisplay =                 data?.head_up_display;
        equipment.multimedia =                    data?.multimedia;
        equipment.seatMemory =                    data?.seat_memory;
        equipment.thresixtyCamera =               data?.thresixty_camera;
        equipment.mp3 =                           data?.mp3;
        equipment.differentialLock =              data?.differential_lock;
        equipment.cupHolders =                    data?.cup_holders;
        equipment.spareTire =                     data?.spare_tire;
        equipment.assistanceForMovingUphills =    data?.assistance_for_moving_uphills;
        equipment.appleCarplay =                  data?.apple_carplay;
        equipment.matrixHeadlights =              data?.matrix_headlights;
        equipment.bumpersInTheColorOfTheCar =     data?.bumpers_in_the_color_of_the_car;
        equipment.remoteLock =                    data?.remote_lock;
        equipment.tintedGlass =                   data?.tinted_glass;
        equipment.heightAdjustableSeats =         data?.height_adjustable_seats;
        equipment.xenonLights =                   data?.xenon_lights;
        equipment.webasto =                       data?.webasto;
        equipment.navigation =                    data?.navigation;
        equipment.camera =                        data?.camera;
        equipment.isofix =                        data?.isofix;
        equipment.keylessIgnition =               data?.keyless_ignition;
        equipment.startStopSistem =               data?.start_stop_Sistem;
        
        return equipment;
    }

    public async add(data: IAddEquipment): Promise<EquipmentModel> {
        return this.baseAdd(data, {});
    }
}