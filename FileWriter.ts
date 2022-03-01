import fs from "fs";
import { FilesPath } from "./FilesPath";
import { Suffix } from "./Suffix";

export class FileWriter{

    static writeOnFile(code : string, filePath : string) : void {
        fs.appendFile(filePath, code + '\n', (err : any) => {
            if (err)
                throw err;
        });
    }

    static whereWrite(code : string, oneFileOutput : boolean) : string {
        let file : string;
        if(oneFileOutput)
            file = FilesPath.oneOutput
        else
        if(code.includes(Suffix.wrongChecksum))
            file = FilesPath.wrongChecksum;
        else if(code.includes(Suffix.unreadable))
            file = FilesPath.unreadable;
        else
            file = FilesPath.valid;
        return file;
    }
}
