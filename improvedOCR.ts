import { FileWriter } from "./class/FileWriter";
import { Checksum } from "./class/Checksum";
import { DecodeFile } from "./class/DecodeFile";

export class ImprovedOCR{

     decodeFiles(files : string[], oneFileOutput : boolean) : Array<string> {
        const codes: Array<string> = [];
        if (files.length === 0)
            return codes;
        for (let i = 0; i < files.length; i++) {
            codes[i] = Checksum.addSuffix(DecodeFile.getCode(files[i]));
            FileWriter.writeOnFile(codes[i], FileWriter.whereWrite(codes[i], oneFileOutput));
        }
        return codes;
    }
}
