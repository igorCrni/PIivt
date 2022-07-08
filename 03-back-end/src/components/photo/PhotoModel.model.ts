import IModel from '../../common/IModel.inteface';


export default class PhotoModel implements IModel {
    photoId: number;
    filePath: string;
}