import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import EquipmentModel from './EquipmentModel.model';

class EquipmentAdapterOptions implements IAdapterOptions {

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
}

export default EquipmentService;