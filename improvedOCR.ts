import * as fs from 'fs';
export class ImprovedOCR{
    private readonly filePath : string;

    constructor(filePath : string) {
        this.filePath = filePath;
    }

    public getFilePath() : string {
        return this.filePath;
    }

    private getFileData() : string{
        return  fs.readFileSync(this.filePath, {encoding:'utf-8'});
    }

    public decodeFile() : string{
        let fileContent : string = this.getFileData();


        //create tab 2 dim
        let tab = ImprovedOCR.createTab();
        tab = ImprovedOCR.initTab(tab);

        //data text to tab 2 dim
        for (let i = 0,k = 0; i <= tab.length; i++, k++) {
            for (let j = 0; j <= tab[i].length; j++) {
                //console.log(fileContent[k]);

                tab[i][j] = fileContent[k];
            }
        }

        ImprovedOCR.printTab(tab);

        return fileContent;
    }

    private static printTab(tab : any) : void {
        for (let i = 0; i <= tab.length; i++) {
            for (let j = 0; j <= tab[i].length; j++) {
                console.log(i,j,tab[i][j]);
            }
        }
    }

    private static initTab(tab : any) : any{
        for (let i = 0; i < tab.length; i++) {
            for (let j = 0; j < tab[i].length; j++) {
                tab[i][j] = " ";
            }
        }
        return tab;
    }

    private static createTab() : any{
        let tab = new Array(2);
        for (let x = 0; x < tab.length; x++) {
            tab[x] = new Array(25);
        }
        return tab;
    }
}
