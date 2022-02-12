import {ImprovedOCR} from "./improvedOCR";

const str = "    _  _     _  _ _  _  _ \n" +
            "  | _| _||_||_ |_  ||_||_|\n" +
            "  ||_  _|  | _||_| ||_| _|\n";

const filePath = "./data";
describe('all tests',()=>{
    test('should be true',()=>{
        expect(true).toBe(true);
    });

    test('should be the same',()=>{
        const improvedOCR = new ImprovedOCR(filePath)

        //console.log(improvedOCR.getFileData());
        expect(improvedOCR.getFileData()).toBe(str);
    })
});
