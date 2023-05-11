import { Address } from './Address';
import { Document } from './Document';
import { IUser } from './interface/IUser';

export class User implements IUser{
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
  