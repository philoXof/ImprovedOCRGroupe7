import {ImprovedOCR} from "./improvedOCR";
import * as fs from 'fs';



const filePath = "./data.text";
const str = fs.readFileSync(filePath, {encoding:'utf-8'});

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
