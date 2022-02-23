import { ImprovedOCR } from "./improvedOCR";

const OCR = new ImprovedOCR();
const filePath4 : string = "./files/file4";
const res : string[] = OCR.decodeFiles([filePath4],false);
console.log(res[0]);
