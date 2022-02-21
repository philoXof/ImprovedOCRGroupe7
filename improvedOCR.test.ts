import {ImprovedOCR} from "./improvedOCR";
import { TabToString } from "./TabToString";
import fs from "fs";
import { ChecksumValidation } from "./ChecksumValidation";


const tabToString : TabToString = new TabToString();
const filePath1 : string = "files/file1";
const filePath2 : string = "files/file2";
const filePath3 : string = "files/file3";
const filePath4 : string = "files/file4";
const filePath5 : string = "files/file5";
const filePath6 : string = "files/file6";
const filePath7 : string = "files/file7";
const filePath8 : string = "files/file8";
const ocr1 : ImprovedOCR = new ImprovedOCR(filePath1);
const ocr2 : ImprovedOCR = new ImprovedOCR(filePath2);
const ocr3 : ImprovedOCR = new ImprovedOCR(filePath3);
const ocr4 : ImprovedOCR = new ImprovedOCR(filePath4);
const ocr5 : ImprovedOCR = new ImprovedOCR(filePath5);
const ocr6 : ImprovedOCR = new ImprovedOCR(filePath6);
const ocr7 : ImprovedOCR = new ImprovedOCR(filePath7);
const ocr8 : ImprovedOCR = new ImprovedOCR(filePath8);

describe('all tests',()=>{

    describe('ça fait du vert, et le vert c\'est cool ! :)',()=>{
        test('should be true',()=>{
            expect(true).toBe(true);
        });
        test('should be false',()=>{
            expect(false).toBe(false);
        });
    });

    describe('files content tests', ()=>{
        test('file1 should be the same', ()=>{
            expect(ocr1.getFileContent()).toBe(fs.readFileSync(filePath1, {encoding:'utf-8'}));
        });
        test('file3 should be the same', ()=>{
            expect(ocr3.getFileContent()).toBe(fs.readFileSync(filePath3, {encoding:'utf-8'}));
        });
        test('file6 should be the same', ()=>{
            expect(ocr6.getFileContent()).toBe(fs.readFileSync(filePath6, {encoding:'utf-8'}));
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
        test('should be "12?13678?"', ()=>{
            expect(ocr7.decodeFile()).toBe('?2?13678?');
        });
        test('should be "312?8?93?"', ()=>{
            expect(ocr8.decodeFile()).toBe('312?8?93?');
        });
    });

    describe('TabToString tests', ()=>{

        test('should be 0', ()=>{
            expect(tabToString.convert([
                " _ ",
                "| |",
                "|_|",
            ])).toBe("0")
        });
        test('should be 1', ()=>{
            expect(tabToString.convert([
                "   ",
                "  |",
                "  |",
            ])).toBe("1")
        });
        test('should be 2', ()=>{
            expect(tabToString.convert([
                " _ ",
                " _|",
                "|_ ",
            ])).toBe("2")
        });
        test('should be 3', ()=>{
            expect(tabToString.convert([
                " _ ",
                " _|",
                " _|"
            ])).toBe("3")
        });
        test('should be 4', ()=>{
            expect(tabToString.convert([
                "   ",
                "|_|",
                "  |"
            ])).toBe("4")
        });
        test('should be 5', ()=>{
            expect(tabToString.convert([
                " _ ",
                "|_ ",
                " _|"
            ])).toBe("5")
        });
        test('should be 6', ()=>{
            expect(tabToString.convert([
                " _ ",
                "|_ ",
                "|_|"
            ])).toBe("6")
        });
        test('should be 7', ()=>{
            expect(tabToString.convert([
                " _ ",
                "  |",
                "  |"
            ])).toBe("7")
        });
        test('should be 8', ()=>{
            expect(tabToString.convert([
                " _ ",
                "|_|",
                "|_|"
            ])).toBe("8")
        });
        test('should be 9', ()=>{
            expect(tabToString.convert([
                " _ ",
                "|_|",
                " _|"
            ])).toBe("9")
        });
    });

    describe('createAndInitTab tests by files', ()=>{
        describe('file1', ()=>{
            const tab1 :string [] = ocr1.fileToTab();
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
            const tab2 : string[] = ocr2.fileToTab();
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
            const tab4 : string[] = ocr4.fileToTab();
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

    describe('CheckSumValidation Tests', ()=>{
        const checksumValidation : ChecksumValidation = new ChecksumValidation();
        test('should be false', ()=>{
            expect(checksumValidation.isValid('123')).toBe(false);
        });
        test('should be false', ()=>{
            expect(checksumValidation.isValid('0123456789')).toBe(false);
        });
        test('should be true', ()=>{
            expect(checksumValidation.isValid('457508000')).toBe(true);
        });
        test('should be false', ()=>{
            expect(checksumValidation.isValid('664371495')).toBe(false);
        });
        test('should be false', ()=>{
            expect(checksumValidation.isValid('?2?13678?')).toBe(false);
        });
        test('should be false', ()=>{
            expect(checksumValidation.isValid('312?8?93?')).toBe(false);
        });
    });

});
