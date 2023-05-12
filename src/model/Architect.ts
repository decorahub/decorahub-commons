import { Address } from './Address';
import { Document } from './Document';
import { IArchitect } from './interface/IArchitect';

export class Architect implements IArchitect {
    uid: string;
    nickName: string;
    fullName: string;
    email: string;
    cellphone: string;
    document: Document;
    address: Address;
    birthday: Date;
    gender: string;
}