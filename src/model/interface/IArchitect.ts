import { IAddress } from './IAddress';
import { IDocument } from './IDocument';

export interface IArchitect {
    uid: string;
    nickName: string;
    fullName: string;
    email: string;
    cellphone: string;
    document: IDocument;
    address: IAddress;
    birthday: Date;
    gender: string;
}