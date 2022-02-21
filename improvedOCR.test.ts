import {ImprovedOCR} from "./improvedOCR";
import { TabToString } from "./TabToString";



const filePath1 : string = "files/file1";
const filePath2 : string = "files/file2";
const filePath3 : string = "files/file3";
const filePath4 : string = "files/file4";
const filePath5 : string = "files/file5";
const filePath6 : string = "files/file6";

const valuesString : TabToString = new TabToString();
const ocr1 : ImprovedOCR = new ImprovedOCR(filePath1);
const ocr2 : ImprovedOCR = new ImprovedOCR(filePath2);
const ocr3 : ImprovedOCR = new ImprovedOCR(filePath3);
const ocr4 : ImprovedOCR = new ImprovedOCR(filePath4);
const ocr5 : ImprovedOCR = new ImprovedOCR(filePath5);
const ocr6 : ImprovedOCR = new ImprovedOCR(filePath6);

describe('all tests',()=>{

    describe('ça fait du vert, et le vert c\'est cool ! :)',()=>{
        test('should be true',()=>{
            expect(true).toBe(true);
        });
        test('should be false',()=>{
            expect(false).toBe(false);
        });
    });

    describe('decoding test', ()=>{
        test('should be "123456789"',()=>{
            expect(ocr1.decodeFile()).toBe("123456789");
        });
        test('should be "111999888"',()=>{
            expect(ocr2.decodeFile()).toBe("111999888");
        });
        test('should be "912588934"',()=>{
            expect(ocr3.decodeFile()).toBe("912588934");
        });
        test('should be "111111111"',()=>{
            expect(ocr4.decodeFile()).toBe("111111111");
        });
        test('should be "921584964"',()=>{
            expect(ocr5.decodeFile()).toBe("921584964");
        });
        test('should be "418900666"',()=>{
            expect(ocr6.decodeFile()).toBe("418900666");
        });
    });

    describe('ValuesString tests', ()=>{

        test('should be 0', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                "| |",
                "|_|",
            ])).toBe("0")
        });
        test('should be 1', ()=>{
            expect(valuesString.tabToString([
                "   ",
                "  |",
                "  |",
            ])).toBe("1")
        });
        test('should be 2', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                " _|",
                "|_ ",
            ])).toBe("2")
        });
        test('should be 3', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                " _|",
                " _|"
            ])).toBe("3")
        });
        test('should be 4', ()=>{
            expect(valuesString.tabToString([
                "   ",
                "|_|",
                "  |"
            ])).toBe("4")
        });
        test('should be 5', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                "|_ ",
                " _|"
            ])).toBe("5")
        });
        test('should be 6', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                "|_ ",
                "|_|"
            ])).toBe("6")
        });
        test('should be 7', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                "  |",
                "  |"
            ])).toBe("7")
        });
        test('should be 8', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                "|_|",
                "|_|"
            ])).toBe("8")
        });
        test('should be 9', ()=>{
            expect(valuesString.tabToString([
                " _ ",
                "|_|",
                " _|"
            ])).toBe("9")
        });
    });

    describe('createAndInitTab tests by files', ()=>{
        describe('file1', ()=>{
            const tab1 = ocr1.createAndInitTab();
            test('length should be 3', ()=>{
                expect(tab1.length).toBe(3);
            });

            test('length should be 27', ()=>{
                expect(tab1[0].length).toBe(27);
            });

            test('length should be 27', ()=>{
                expect(tab1[1].length).toBe(27);
            });

            test('length should be 27', ()=>{
                expect(tab1[2].length).toBe(27);
            });
        });
        describe('file2', ()=>{
            const tab2 = ocr2.createAndInitTab();
            test('length should be 3', ()=>{
                expect(tab2.length).toBe(3);
            });

            test('length should be 27', ()=>{
                expect(tab2[0].length).toBe(27);
            });

            test('length should be 27', ()=>{
                expect(tab2[1].length).toBe(27);
            });

            test('length should be 27', ()=>{
                expect(tab2[2].length).toBe(27);
            });
        });
        describe('file4', ()=>{
            const tab4 = ocr4.createAndInitTab();
            test('length should be 3', ()=>{
                expect(tab4.length).toBe(3);
            });

            test('length should be 27', ()=>{
                expect(tab4[0].length).toBe(27);
            });

            test('length should be 27', ()=>{
                expect(tab4[1].length).toBe(27);
            });

            test('length should be 27', ()=>{
                expect(tab4[2].length).toBe(27);
            });
        });
    });


});
