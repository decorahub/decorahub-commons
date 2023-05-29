import { IAddress } from './IAddress';
import { IUserDocument } from './IUserDocument';

export interface IArchitect {
    uid: string;
    nickName: string;
    document: IUserDocument;
    address: IAddress;
    birthday: Date;
    gender: string;
}