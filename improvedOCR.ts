import * as fs from 'fs';
import { TabToString } from "./TabToString";

export class ImprovedOCR{

    private fileOutput : string = 'output/output.txt';
    private fileErrOutput : string = 'output/outputError.txt';
    private fileIllOutput : string = 'output/outputIll.txt';
    private fileValidOutput : string = 'output/outputValid.txt';

    public decodeFiles(files : string[], oneFileOutput : boolean) : Array<string> {
        const codes: Array<string> = [];
        if (files.length === 0)
            return codes;
        for (let i = 0; i < files.length; i++) {
            codes[i] = this.addSuffix(ImprovedOCR.getCodeFromFile(files[i]));
            this.whereWrite(codes[i], oneFileOutput);
        }
        return codes;
    }

    private whereWrite(code : string, oneFileOutput : boolean) : void {
        let file = "";
        if(oneFileOutput)
            file = this.fileOutput
        else
            if(code.includes(' ERR'))
                file = this.fileErrOutput;
            else if(code.includes(' ILL'))
                file = this.fileIllOutput;
            else
                file = this.fileValidOutput;
        ImprovedOCR.writeOnFile(code, file);
    }

    private static writeOnFile(code : string, filePath : string) : void {
        fs.appendFile(filePath, code + '\n', (err : any) => {
            if (err)
                throw err;
        });
    }

    public isValidChecksum(code : string) : boolean {
        if(code.length != 9 || code.includes('?')) return false;
        let checksum : number = 0;
        for (let i = 0,j = 9; i < code.length; i++,j--)
            checksum += Number(code[i]) * j;
        return checksum % 11 == 0;
    }

    public addSuffix(code : string) : string {
        if(code.includes('?')) return code + " ILL";
        return this.isValidChecksum(code) ? code : code+ " ERR";
    }


    private static getFileContent(filePath : string) : string {
        return  fs.readFileSync(filePath, {encoding:'utf-8'});
    }

    private static getCodeFromFile(filePath : string) : string {
        const tabToString : TabToString = new TabToString();
        const tab : string[] = ImprovedOCR.fileToTab(filePath);
        let code : string = "";
        for (let i = 0; i <= 24; i += 3)
            code += tabToString.convert([tab[0].slice(i, i + 3), tab[1].slice(i, i + 3), tab[2].slice(i, i + 3)]);
        return code;
    }

    private static fileToTab(filePath : string) : string[] {
        let fileContent : string = ImprovedOCR.getFileContent(filePath);
        let tab : string[] = ["","",""];

        for (let i = 0, j = 0; i <= 2; i++) {
            let line = "";
            for (; fileContent[j] != '\r'; j++)
                line +=  fileContent[j];
            j += 2;
            if(line.length < 27)
                while (line.length < 27)
                    line += " ";
            tab[i] = line;
        }
        return tab;
    }

    /**
     * Accessor methode for tests
     */
    public getCodeFromFileAccessor(filePath : string){
        return ImprovedOCR.getCodeFromFile(filePath)
    }

    public writeOnFileAccessor(code : string, filePath : string) : void {
        ImprovedOCR.writeOnFile(code, filePath);
    }
    public getFileContentAccessor(filePath : string) : string {
        return ImprovedOCR.getFileContent(filePath);
    }
    public fileToTabAccessor(filePath : string ) : string[] {
        return ImprovedOCR.fileToTab(filePath);
    }
}
