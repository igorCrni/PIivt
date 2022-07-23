import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import DriveModel from './DriveModel.model';

class DriveAdapterOptions implements IAdapterOptions {

}

class DriveService extends BaseService<DriveModel, DriveAdapterOptions> {
    tableName(): string {
        return "drive";
    }

    protected async adaptToModel(data: any): Promise<DriveModel> {
        const drive: DriveModel = new DriveModel();

        drive.driveId = +data?.drive_id;
        drive.name = data?.name;

        return drive;
    }
}

export default DriveService;