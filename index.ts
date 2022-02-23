import { ImprovedOCR } from "./improvedOCR";

const OCR = new ImprovedOCR("./files/file4");
const res = OCR.decodeFile();
console.log(res);


