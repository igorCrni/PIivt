import IAd from './IAd.model';
export default interface IUser {
    userId: number;
    email: string;
    passwordhash:string|null;
    forename: string;
    surname: string;
    city:string;
    phoneNumber:string;
    isActive: boolean;
    activationCode:string|null;
    ads?: IAd[];
    
}