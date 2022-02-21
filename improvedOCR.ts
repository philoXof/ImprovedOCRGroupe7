import * as fs from 'fs';
import { TabToString } from "./TabToString";

export class ImprovedOCR{
    private readonly filePath : string;

    constructor(filePath : string) {
        this.filePath = filePath;
    }

    public getFileContent() : string {
        return  fs.readFileSync(this.filePath, {encoding:'utf-8'});
    }

    public decodeFile() : string {
        const tabToString : TabToString = new TabToString();
        const tab : string[] = this.fileToTab();
        let code : string = "";
        for (let i = 0; i <= 24; i += 3)
            code += tabToString.convert([tab[0].slice(i, i + 3), tab[1].slice(i, i + 3), tab[2].slice(i, i + 3)]);
        return code;
    }

    public fileToTab() : string[] {
        let fileContent : string = this.getFileContent();
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
}
