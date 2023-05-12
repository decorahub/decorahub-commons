import { IsDateString, IsFirebasePushId, IsIn, IsOptional, MaxLength, MinLength } from 'class-validator';

import { Address } from './Address';
import { Document } from './Document';
import { IArchitect } from './interface/IArchitect';

export class Architect implements IArchitect {
    
    @IsFirebasePushId()
    uid: string;

    @IsOptional()
    @MinLength(3, { message: 'Nome precisa ter no mínimo 3 caracteres' })
    @MaxLength(30, {
        message: 'Nome precisa ter no máximo 30 caracteres',
    })
    nickName: string;

    @MinLength(10, { message: 'Nome Completo precisa ter no mínimo 10 caracteres' })
    @MaxLength(100, {
        message: 'Documento precisa ter no máximo 100 caracteres',
    })
    fullName: string;

    @IsOptional()
    @MinLength(5, { message: 'Email precisa ter no mínimo 5 caracteres' })
    @MaxLength(100, {
        message: 'Email precisa ter no máximo 100 caracteres',
    })
    email: string;
    
    @MinLength(8, { message: 'Celular precisa ter no mínimo 8 caracteres' })
    @MaxLength(15, {
        message: 'Celular precisa ter no máximo 15 caracteres',
    })
    cellphone: string;

    @IsOptional()
    @IsDateString()
    birthday: Date;

    @IsOptional()
    @IsIn(['M', 'F'])
    gender: string;

    @IsOptional()
    document: Document;

    @IsOptional()
    address: Address;
}