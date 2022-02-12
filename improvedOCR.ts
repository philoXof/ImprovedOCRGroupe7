import * as fs from 'fs';
export class ImprovedOCR{
    private readonly filePath : string;
    constructor(filePath : string) {
        this.filePath = filePath;
    }

    public getFilePath(): string {
        return this.filePath;
    }

    public getFileData() : string{
        return  fs.readFileSync(this.filePath, {encoding:'utf-8'});
    }

    public decodeFile() : string{
        fs.readFile(this.filePath, (e,data)=>{

        });
        return "";
    }
}
