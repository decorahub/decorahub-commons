import { AddressModel } from './Address.model';
import { DocumentModel } from './Document.model';
import { IClient } from './interface/IClient';

export class ClientModel implements IClient{
    uid: string;
    nickName: string;
    fullName: string;
    email: string;
    cellphone: string;
    document: DocumentModel;
    address: AddressModel;
    birthday: Date;
    gender: string;
}
  