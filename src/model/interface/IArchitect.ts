import { IAddress } from '@decorahub-commons/model/interface/IAddress';
import { IUserDocument } from '@decorahub-commons/model/interface/IUserDocument';


export interface IArchitect {
    uid: string;
    nickName: string;
    document: IUserDocument;
    address: IAddress;
    birthday: Date;
    gender: string;
}