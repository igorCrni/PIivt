import IModel from "../../common/IModel.inteface";

export default class UserModel implements IModel {
    userId: number;
    email: string;
    passwordHash: string | null;
    forename: string;
    surname: string;
    city: string;
    phoneNumber: string;
    isActive: boolean;
    activationCode: string|null;
}
