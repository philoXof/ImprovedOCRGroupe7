import fs from "fs";
import { OutputFilesPath } from "../enum/OutputFilesPath";
import { Suffix } from "../enum/Suffix";

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
            file = OutputFilesPath.oneOutput
        else
        if(code.includes(Suffix.wrongChecksum))
            file = OutputFilesPath.wrongChecksum;
        else if(code.includes(Suffix.unreadable))
            file = OutputFilesPath.unreadable;
        else
            file = OutputFilesPath.valid;
        return file;
    }
}
