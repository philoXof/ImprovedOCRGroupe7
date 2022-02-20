import { ImprovedOCR } from "./improvedOCR";
import { ValuesString } from "./valuesString";


const OCR = new ImprovedOCR("./files/file2");

const res = OCR.decodeFile();
console.log(res);


