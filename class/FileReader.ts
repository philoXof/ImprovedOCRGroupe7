import fs from "fs";

export class FileReader {
    static getFileContent(filePath : string) : string {
        return  fs.readFileSync(filePath, {encoding:'utf-8'});
    }
}
