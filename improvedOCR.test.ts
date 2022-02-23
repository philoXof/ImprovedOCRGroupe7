import {ImprovedOCR} from "./improvedOCR";
import { TabToString } from "./TabToString";
import fs from "fs";
import { ChecksumValidation } from "./ChecksumValidation";
import { DecodesFiles } from "./decodesFiles";

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
const tabToString : TabToString = new TabToString();
const decodeFiles :DecodesFiles = new DecodesFiles();
const checksumValidation : ChecksumValidation = new ChecksumValidation();
const files : string[] = [
    filePath1,
    filePath2,
    filePath3,
    filePath4,
    filePath5,
    filePath6,
    filePath7,
    filePath8,
];

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

    describe('decoding test User story 1', ()=>{
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

    describe('CheckSumValidation Tests User Story 2 / User Story 3', ()=>{
        describe('checksum isValid test', ()=>{
            test('should be false', ()=>{
                expect(checksumValidation.isValid('123')).toBe(false);
            });
            test('should be false', ()=>{
                expect(checksumValidation.isValid('0123456789')).toBe(false);
            });
            test('should be true', ()=>{
                expect(checksumValidation.isValid('123456789')).toBe(true);
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
        describe('checksum tests', ()=>{
            test('should be ERR', ()=>{
                expect(checksumValidation.addSuffixeError('123')).toBe('123 ERR');
            });
            test('should be ERR', ()=>{
                expect(checksumValidation.addSuffixeError('0123456789')).toBe('0123456789 ERR');
            });
            test('should be 457508000', ()=>{
                expect(checksumValidation.addSuffixeError('457508000')).toBe('457508000');
            });
            test('should be ERR', ()=>{
                expect(checksumValidation.addSuffixeError('664371495')).toBe('664371495 ERR');
            });
            test('should be ILL', ()=>{
                expect(checksumValidation.addSuffixeError('?2?13678?')).toBe('?2?13678? ILL');
            });
            test('should be ILL', ()=>{
                expect(checksumValidation.addSuffixeError('312?8?93?')).toBe('312?8?93? ILL');
            });
        });
    });

    describe('decodeFiles tests User Story 2',()=>{
        const codes : Array<string> = decodeFiles.decode(files);

        test('file 1 should be "123456789"', ()=>{
            expect(codes[0]).toBe('123456789');
        });
        test('file 2 should be ""', ()=>{
            expect(codes[1]).toBe('111999888 ERR');
        });
        test('file 3 should be "912588934"', ()=>{
            expect(codes[2]).toBe('912588934');
        });
        test('file 4 should be "111111111 ERR"', ()=>{
            expect(codes[3]).toBe('111111111 ERR');
        });
        test('file 5 should be "921584964 ERR"', ()=>{
            expect(codes[4]).toBe('921584964 ERR');
        });
        test('file 6 should be "418900666 ERR"', ()=>{
            expect(codes[5]).toBe('418900666 ERR');
        });
        test('file 7 should be "?2?13678? ILL"', ()=>{
            expect(codes[6]).toBe('?2?13678? ILL');
        });
        test('file 8 should be "312?8?93? ILL"', ()=>{
            expect(codes[7]).toBe('312?8?93? ILL');
        });

    });
});
