import { IAddress } from './interface/IAddress';

export class Address implements IAddress {
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