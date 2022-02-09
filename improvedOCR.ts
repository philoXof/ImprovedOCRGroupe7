export class ImprovedOCR{
    private _filePath : string;
    constructor(filePath : string) {
        this._filePath = filePath;
    }

    get filePath(): string {
        return this._filePath;
    }
}