import { CodeArrayToString } from "./CodeArrayToString";
import { FileReader } from "./FileReader";

export class DecodeFile{
    static getCode(filePath : string) : string {
        const tab : string[] = this.fileToTab(filePath);
        let code : string = "";
        for (let i = 0; i <= 24; i += 3)
            code += CodeArrayToString.convert([tab[0].slice(i, i + 3), tab[1].slice(i, i + 3), tab[2].slice(i, i + 3)]);
        return code;
    }

    static fileToTab(filePath : string) : string[] {
        let fileContent : string = FileReader.getContent(filePath);
        let tab : string[] = ["","",""];

        for (let i = 0, j = 0; i <= 2; i++) {
            let line = "";
            for (; fileContent[j] != '\r'; j++)
                line +=  fileContent[j];
            j += 2; // \r\n on file
            if(line.length < 27)
                while (line.length < 27)
                    line += " ";
            tab[i] = line;
        }
        return tab;
    }
}
