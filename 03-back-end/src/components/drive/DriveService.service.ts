import IAdapterOptions from '../../common/IAdapterOptions.interface';
import BaseService from '../../common/BaseService';
import DriveModel from './DriveModel.model';
import IAddDrive from './dto/IAddDrive.dto';

export interface IDriveAdapterOptions extends IAdapterOptions{}

export default class DriveService extends BaseService<DriveModel, IDriveAdapterOptions> {
    tableName(): string {
        return "car_body";
    }
    protected async adaptToModel(data: any): Promise<DriveModel> {
        const drive: DriveModel = new DriveModel();

        drive.driveId =         +data?.drive_id;
        drive.fwd =             data?.fwd;
        drive.rwd =             data?.rwd;
        drive.awd =             data?.awd;
        drive.awdReduction =    data?.awd_reduction;

        return drive;
    }

    public async add(data: IAddDrive): Promise<DriveModel> {
        return this.baseAdd(data, {});
    }
}