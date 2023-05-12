import { Address } from './Address';
import { Document } from './Document';
import { IClient } from './interface/IClient';

export class User implements IClient{
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
  