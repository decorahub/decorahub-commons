import { AddressModel } from '@rootCommons/model/Address.model';
import { IArchitect } from '@rootCommons/model/interface/IArchitect';
import { UserDocumentModel } from '@rootCommons/model/UserDocument.model';
import { IsDateString, IsFirebasePushId, IsIn, IsOptional, MaxLength, MinLength } from 'class-validator';


export class ArchitectModel implements IArchitect {
    
    @IsFirebasePushId()
    uid: string;

    @IsOptional()
    @MinLength(3, { message: 'Nome precisa ter no mínimo 3 caracteres' })
    @MaxLength(50, {
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

    signedContract: boolean;
}