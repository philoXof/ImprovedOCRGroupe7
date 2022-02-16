import * as fs from 'fs';
export class ImprovedOCR{
    private readonly filePath : string;

    constructor(filePath : string) {
        this.filePath = filePath;
    }

    public getFilePath() : string {
        return this.filePath;
    }

    public getFileData() : string {
        return  fs.readFileSync(this.filePath, {encoding:'utf-8'});
    }


    public decodeFile() : string {
        let fileContent : string = this.getFileData();


        //create tab 2 dim
        let tab : Array<Array<string>> = ImprovedOCR.createTab();
        tab = ImprovedOCR.initTab(tab);

        //data text to tab 2 dim
        /*for (let i = 0,k = 0; i <= tab.length; i++, k++) {
            for (let j = 0; j <= tab[i].length; j++) {
                console.log(fileContent[k]);
                tab[i][j] = fileContent[k];
            }
        }*/

        ImprovedOCR.printTab(tab);

        return fileContent;
    }

    /**
     * try with tab 2 dimensions
     */
    private static printTab(tab : Array<Array<string>>) : void {
        for (let i = 0; i <= tab.length; i++) {
            for (let j = 0; j <= tab[i].length; j++) {
                console.log(i, j, tab[i][j]);
            }
        }
    }

    private static initTab(tab : Array<Array<string>>) : Array<Array<string>> {
        for (let i = 0; i <= tab.length; i++) {
            for (let j = 0; j <= tab[i].length; j++) {
                tab[i][j] = "1";
            }
        }
        return tab;
    }

    private static createTab() : Array<Array<string>>{
        return new Array(new Array(25),new Array(25),new Array(25));
    }
}
