import { DocumentTypeEnum } from 'src/enum/DocumentTypeEnum';

export interface IDocument {
    type: DocumentTypeEnum;
    number: string;
    origin: string;
    expirationDate: Date;
    issueDate: Date;
    complement: string;
}