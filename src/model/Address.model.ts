import { IAddress } from '@decorahub-commons/model/interface/IAddress';

export class AddressModel implements IAddress {
    name: string;
    street: string;
    number: string;
    complement: string;
    locale: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    optionalInformation: string;
}