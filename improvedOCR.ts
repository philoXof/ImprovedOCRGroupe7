import * as fs from 'fs';
import { TabToString } from "./TabToString";
export class ImprovedOCR{
    private readonly filePath : string;

    constructor(filePath : string) {
        this.filePath = filePath;
    }

    public getFileData() : string {
        return  fs.readFileSync(this.filePath, {encoding:'utf-8'});
    }


    public decodeFile() : string {
        const tabToString : TabToString = new TabToString();
        const tab : string[] = this.createAndInitTab();

        let code : string = "";
        for (let i = 0; i <= 24; i += 3) {
            const tempTab : string[] = [tab[0].slice(i, i + 3), tab[1].slice(i, i + 3), tab[2].slice(i, i + 3)];
            code += tabToString.tabToString(tempTab);
        }

        return code;
    }

    public createAndInitTab() : string[] {
        let fileContent : string = this.getFileData();

        let tab : string[] = ["","",""];

        for (let i = 0, j = 0; i <= 2; i++) {
            let temp = "";
            for (; fileContent[j] != '\r'; j++) {
                temp +=  fileContent[j];
            }
            j++;
            j++;
            if(temp.length < 27){
                while (temp.length < 27) temp += " ";
            }
            tab[i] = temp;
        }
        return tab;
    }

    /*private static printTab1(tab : Array<string>) : void {
        for (let i = 0; i <= 2; i++) {
            console.log(tab[i]);
        }
    }*/

    /**
     * try with tab 2 dimensions

    private static printTab(tab : Array<Array<string>>) : void {
        for (let i = 0; i <= tab.length; i++) {
            for (let j = 0; j <= 25; j++) {
                console.log(i, j, tab[i][j]);
            }
        }
    }

    private static initTab(tab : Array<Array<string>>) : Array<Array<string>> {
        for (let i = 0; i <= tab.length; i++) {
            for (let j = 0; j <= 25; j++) {
                tab[i][j] = "d";
            }
        }
        return tab;
    }*/
}
