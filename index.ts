import { ImprovedOCR } from "./improvedOCR";


const OCR = new ImprovedOCR("./data.text");

//console.log(OCR.getFileData());

const res = OCR.decodeFile();
console.log(res);