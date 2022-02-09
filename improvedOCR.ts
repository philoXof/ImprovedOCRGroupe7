export class ImprovedOCR{
    private readonly _filePath : string;
    constructor(filePath : string) {
        this._filePath = filePath;
    }

    get filePath(): string {
        return this._filePath;
    }
}