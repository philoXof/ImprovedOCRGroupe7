import { ImprovedOCR } from "./improvedOCR";
import { ChecksumValidation } from "./ChecksumValidation";

const fs = require('fs');

export class DecodesFiles{
    public decode(files : string[]) : Array<string> {
        const codes : Array<string> = [];
        if (files.length === 0) return codes;
        const checksumValidation : ChecksumValidation = new ChecksumValidation()
        for (let i = 0; i < files.length; i++) {
            const ocr : ImprovedOCR = new ImprovedOCR(files[i]);
            codes[i] = checksumValidation.addSuffixeError(ocr.decodeFile())
            this.writeOnFile(codes[i]);
        }
        return codes;
    }

    public writeOnFile(code : string) : void {
        fs.appendFile('output/output.txt', code + '\n', (err : any) => {
            if (err)
                throw err;
        });
    }
}
