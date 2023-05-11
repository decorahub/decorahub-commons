import { DocumentTypeEnum } from 'src/enum/DocumentTypeEnum';

import { IDocument } from './interface/IDocument';

export class Document implements IDocument {
    type: DocumentTypeEnum;
    number: string;
    origin: string;
    expirationDate: Date;
    issueDate: Date;
    complement: string;
}