import { IsDateString, IsFirebasePushId, IsIn, IsOptional, MaxLength, MinLength } from 'class-validator';

import { AddressModel } from './Address.model';
import { IArchitect } from './interface/IArchitect';
import { UserDocumentModel } from './UserDocument.model';


export class ArchitectModel implements IArchitect {
    
    @IsFirebasePushId()
    uid: string;

    @IsOptional()
    @MinLength(3, { message: 'Nome precisa ter no mínimo 3 caracteres' })
    @MaxLength(30, {
        message: 'Nome precisa ter no máximo 30 caracteres',
    })
    nickName: string;
    
    @IsOptional()
    @IsDateString()
    birthday: Date;

    @IsOptional()
    @IsIn(['M', 'F'])
    gender: string;

    @IsOptional()
    document: UserDocumentModel;

    @IsOptional()
    address: AddressModel;
}