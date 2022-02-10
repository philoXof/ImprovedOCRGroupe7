import {ImprovedOCR} from "./improvedOCR";

const str = "  _  _     _  _  _  _  _ \n" +
            "| _| _||_||_ |_   ||_||_|\n" +
            "||_  _|  | _||_|  ||_| _|\n";

const filePath = "./data.txt";
describe('all tests',()=>{
    test('should be true',()=>{
        expect(true).toBe(true);
    });

    test('should be the same',()=>{
        const improvedOCR = new ImprovedOCR(filePath)
        console.log(str);
        expect(improvedOCR.filePath).toBe(filePath);
    })
});