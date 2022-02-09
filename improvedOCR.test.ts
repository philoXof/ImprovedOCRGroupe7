import {ImprovedOCR} from "./improvedOCR";

describe('description',()=>{
    test('should be true',()=>{
        expect(true).toBe(true);
    });

    test('should be the same',()=>{
        const improvedOCR = new ImprovedOCR("vide")
        expect(improvedOCR.filePath).toBe("vide");
    })
});