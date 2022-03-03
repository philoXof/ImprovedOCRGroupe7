import fs from "fs";

export class FileReader {
    static getContent(filePath : string) : string {
        return  fs.readFileSync(filePath, {encoding:'utf-8'});
    }
}
