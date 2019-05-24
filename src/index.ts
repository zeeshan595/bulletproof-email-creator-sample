import {
  IDocument,
  Document
} from "bulletproof-email-creator";

const document: IDocument = { 
  ...Document.Default
};
Document.saveDocument(document, "index.html");