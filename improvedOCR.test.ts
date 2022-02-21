import {ImprovedOCR} from "./improvedOCR";
import { ValuesString } from "./valuesString";



const filePath1 : string  = "files/file1";
const filePath2 : string  = "files/file2";
const filePath3 : string = "files/file3";
const filePath4 : string = "files/file4";
const valuesString : ValuesString = new ValuesString();


describe('all tests',()=>{

    describe('ça fait du vert :)',()=>{
        test('should be true',()=>{
            expect(true).toBe(true);
        });
        test('should be false',()=>{
            expect(false).toBe(false);
        });
    });

    describe('decoding test', ()=>{
        test('should be "123456789"',()=>{
            const improvedOCR : ImprovedOCR = new ImprovedOCR(filePath1);
            expect(improvedOCR.decodeFile()).toBe("123456789");
        });

        test('should be "111999888"',()=>{
            const improvedOCR : ImprovedOCR = new ImprovedOCR(filePath2);
            expect(improvedOCR.decodeFile()).toBe("111999888");
        });

        test('should be "912588934"',()=>{
            const improvedOCR : ImprovedOCR = new ImprovedOCR(filePath3);
            expect(improvedOCR.decodeFile()).toBe("912588934");
        });
        test('should be "111111111"',()=>{
            const improvedOCR : ImprovedOCR = new ImprovedOCR(filePath4);
            expect(improvedOCR.decodeFile()).toBe("111111111");
        });
    });

    describe('ValuesString tests', ()=>{

        test('should be 1', ()=>{
            expect(valuesString.tabToNumber([
                "   ",
                "  |",
                "  |",
            ])).toBe("1")
        });
        test('should be 2', ()=>{
            expect(valuesString.tabToNumber([
                " _ ",
                " _|",
                "|_ ",
            ])).toBe("2")
        });
        test('should be 3', ()=>{
            expect(valuesString.tabToNumber([
                " _ ",
                " _|",
                " _|"
            ])).toBe("3")
        });
        test('should be 4', ()=>{
            expect(valuesString.tabToNumber([
                "   ",
                "|_|",
                "  |"
            ])).toBe("4")
        });
        test('should be 5', ()=>{
            expect(valuesString.tabToNumber([
                " _ ",
                "|_ ",
                " _|"
            ])).toBe("5")
        });
        test('should be 6', ()=>{
            expect(valuesString.tabToNumber([
                " _ ",
                "|_ ",
                "|_|"
            ])).toBe("6")
        });
        test('should be 7', ()=>{
            expect(valuesString.tabToNumber([
                " _ ",
                "  |",
                "  |"
            ])).toBe("7")
        });
        test('should be 8', ()=>{
            expect(valuesString.tabToNumber([
                " _ ",
                "|_|",
                "|_|"
            ])).toBe("8")
        });
        test('should be 9', ()=>{
            expect(valuesString.tabToNumber([
                " _ ",
                "|_|",
                " _|"
            ])).toBe("9")
        });
    });

});
