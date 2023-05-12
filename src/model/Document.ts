import { IsDateString, IsIn, IsNumberString, IsOptional, MaxLength, MinLength } from 'class-validator';

import { IDocument } from './interface/IDocument';

export class Document implements IDocument {
    
    @IsIn(['CPF', 'CNPJ', 'PASSPORT'])
    type: string;

    @IsNumberString()
    @MinLength(6, { message: 'Documento precisa ter no mínimo 6 caracteres' })
    @MaxLength(16, {
        message: 'Documento precisa ter no máximo 16 caracteres',
    })
    number: string;

    @IsOptional()
    @MaxLength(30, {
        message: 'Origem do documento precisa ter no máximo 30 caracteres',
    })
    origin: string;

    @IsOptional()
    @IsDateString()
    expirationDate: Date;

    @IsOptional()
    @IsDateString()
    issueDate: Date;

    @IsOptional()
    @MaxLength(30, {
        message: 'Complemento precisa ter no máximo 30 caracteres',
    })
    complement: string;
}