import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import EquipmentModel from './EquipmentModel.model';

class EquipmentAdapterOptions implements IAdapterOptions {

}

interface AdEquipmentInterface {
    ad_equipment_id: number;
    ad_id: number;
    equipment_id: number;
}

class EquipmentService extends BaseService<EquipmentModel, EquipmentAdapterOptions> {
    tableName(): string {
        return "equipment";
    }

    protected async adaptToModel(data: any): Promise<EquipmentModel> {
        const equipment: EquipmentModel = new EquipmentModel();

        equipment.equipmentId = +data?.equipment_id;
        equipment.name = data?.name;

        return equipment;
    }

    public async getAllByAdId(adId:number, options: EquipmentAdapterOptions = {}): Promise<EquipmentModel[]>{
        return new Promise((resolve, reject) => {
            this.getAllFromTableByFieldNameAndValue<AdEquipmentInterface>("ad_equipment", "ad_id", adId)
            .then(async result => {
                const equipmentIds = result.map(ae => ae.equipment_id);

                const equipments: EquipmentModel[] = [];

                for (let equipmentId of equipmentIds) {
                    const equipment = await this.getById(equipmentId, options);
                    equipments.push(equipment);
                }

                resolve(equipments);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}

export default EquipmentService;