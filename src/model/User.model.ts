import { IUser } from '@rootCommons/model/interface/IUser';
import { IsFirebasePushId, MaxLength, MinLength } from 'class-validator';

export class UserModel implements IUser {
    
    @IsFirebasePushId()
    @MinLength(10, { message: 'Uid precisa ter no mínimo 10 caracteres' })
    @MaxLength(15, {
        message: 'Uild precisa ter no máximo 36 caracteres',
    })
    uid: string;

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

    @MinLength(10, { message: 'Nome Completo precisa ter no mínimo 10 caracteres' })
    @MaxLength(100, {
        message: 'Documento precisa ter no máximo 100 caracteres',
    })
    fullName: string;
}