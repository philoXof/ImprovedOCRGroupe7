import {ImprovedOCR} from "./improvedOCR";
import { TabToString } from "./TabToString";
import fs from "fs";

const filePath1 : string = "files/file1";
const filePath2 : string = "files/file2";
const filePath3 : string = "files/file3";
const filePath4 : string = "files/file4";
const filePath5 : string = "files/file5";
const filePath6 : string = "files/file6";
const filePath7 : string = "files/file7";
const filePath8 : string = "files/file8";
const ocr : ImprovedOCR = new ImprovedOCR();
const tabToString : TabToString = new TabToString();


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
            expect(ocr.getFileContentAccessor(filePath1)).toBe(fs.readFileSync(filePath1, {encoding:'utf-8'}));
        });
        test('file3 should be the same', ()=>{
            expect(ocr.getFileContentAccessor(filePath3)).toBe(fs.readFileSync(filePath3, {encoding:'utf-8'}));
        });
        test('file6 should be the same', ()=>{
            expect(ocr.getFileContentAccessor(filePath6)).toBe(fs.readFileSync(filePath6, {encoding:'utf-8'}));
        });
    });

    describe('decoding test User story 1', ()=>{
        test('should be "123456789"',()=>{
            expect(ocr.getCodeFromFileAccessor(filePath1)).toBe("123456789");
        });
        test('should be "111999888"',()=>{
            expect(ocr.getCodeFromFileAccessor(filePath2)).toBe("111999888");
        });
        test('should be "912588934"',()=>{
            expect(ocr.getCodeFromFileAccessor(filePath3)).toBe("912588934");
        });
        test('should be "111111111"',()=>{
            expect(ocr.getCodeFromFileAccessor(filePath4)).toBe("111111111");
        });
        test('should be "921584964"',()=>{
            expect(ocr.getCodeFromFileAccessor(filePath5)).toBe("921584964");
        });
        test('should be "418900666"',()=>{
            expect(ocr.getCodeFromFileAccessor(filePath6)).toBe("418900666");
        });
        test('should be "12?13678?"', ()=>{
            expect(ocr.getCodeFromFileAccessor(filePath7)).toBe('?2?13678?');
        });
        test('should be "312?8?93?"', ()=>{
            expect(ocr.getCodeFromFileAccessor(filePath8)).toBe('312?8?93?');
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

    describe('createAndInitTab tests', ()=> {
        const tab: string [] = ocr.fileToTabAccessor(filePath1);
        test('length should be 3', () => {
            expect(tab.length).toBe(3);
        });
        test('length should be 27', () => {
            expect(tab[0].length).toBe(27);
        });
        test('length should be 27', () => {
            expect(tab[1].length).toBe(27);
        });
        test('length should be 27', () => {
            expect(tab[2].length).toBe(27);
        });
    });

    describe('CheckSumValidation Tests User Story 2 / User Story 3', ()=>{
        describe('checksum isValid test', ()=>{
            test('should be false', ()=>{
                expect(ocr.isValidChecksum('123')).toBe(false);
            });
            test('should be false', ()=>{
                expect(ocr.isValidChecksum('0123456789')).toBe(false);
            });
            test('should be true', ()=>{
                expect(ocr.isValidChecksum('123456789')).toBe(true);
            });
            test('should be true', ()=>{
                expect(ocr.isValidChecksum('457508000')).toBe(true);
            });
            test('should be false', ()=>{
                expect(ocr.isValidChecksum('664371495')).toBe(false);
            });
            test('should be false', ()=>{
                expect(ocr.isValidChecksum('?2?13678?')).toBe(false);
            });
            test('should be false', ()=>{
                expect(ocr.isValidChecksum('312?8?93?')).toBe(false);
            });
        });
        describe('checksum suffixes tests', ()=>{
            test('should be ERR', ()=>{
                expect(ocr.addSuffix('123')).toBe('123 ERR');
            });
            test('should be ERR', ()=>{
                expect(ocr.addSuffix('0123456789')).toBe('0123456789 ERR');
            });
            test('should be 457508000', ()=>{
                expect(ocr.addSuffix('457508000')).toBe('457508000');
            });
            test('should be ERR', ()=>{
                expect(ocr.addSuffix('664371495')).toBe('664371495 ERR');
            });
            test('should be ILL', ()=>{
                expect(ocr.addSuffix('?2?13678?')).toBe('?2?13678? ILL');
            });
            test('should be ILL', ()=>{
                expect(ocr.addSuffix('312?8?93?')).toBe('312?8?93? ILL');
            });
        });
    });

    describe('decodeFiles tests User Story 2',()=>{
        const files1 : string[] = [
            filePath1,
            filePath2,
            filePath3,
            filePath7,
        ];
        const files2 : string[] = [
            filePath4,
            filePath5,
            filePath6,
            filePath8
        ];
        const codes1 : Array<string> = ocr.decodeFiles(files1, false);
        const codes2 : Array<string> = ocr.decodeFiles(files2, true);
        describe('one file', ()=>{
            test('file 1 should be "123456789"', ()=>{
                expect(codes1[0]).toBe('123456789');
            });
            test('file 2 should be ""', ()=>{
                expect(codes1[1]).toBe('111999888 ERR');
            });
            test('file 3 should be "912588934"', ()=>{
                expect(codes1[2]).toBe('912588934');
            });
            test('file 4 should be "?2?13678? ILL"', ()=>{
                expect(codes1[3]).toBe('?2?13678? ILL');
            });
        });

        describe('several file', ()=>{
            test('file 4 should be "111111111 ERR"', ()=>{
                expect(codes2[0]).toBe('111111111 ERR');
            });
            test('file 1 should be "921584964 ERR"', ()=>{
                expect(codes2[1]).toBe('921584964 ERR');
            });
            test('file 2 should be "418900666 ERR"', ()=>{
                expect(codes2[2]).toBe('418900666 ERR');
            });
            test('file 3 should be "312?8?93? ILL"', ()=>{
                expect(codes2[3]).toBe('312?8?93? ILL');
            });

        });
    });
});
