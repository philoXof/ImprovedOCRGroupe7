import {ImprovedOCR} from "./improvedOCR";
import { CodeArrayToString } from "./CodeArrayToString";
import fs from "fs";
import { FileWriter } from "./FileWriter";
import { FilesPath } from "./FilesPath";

const filePath1 : string = "files/file1";
const filePath2 : string = "files/file2";
const filePath3 : string = "files/file3";
const filePath4 : string = "files/file4";
const filePath5 : string = "files/file5";
const filePath6 : string = "files/file6";
const filePath7 : string = "files/file7";
const filePath8 : string = "files/file8";
const ocr : ImprovedOCR = new ImprovedOCR();
const codeArrayToString : CodeArrayToString = new CodeArrayToString();


describe('all tests',()=>{

    describe('decoding test, user story 1 & 3', ()=>{
        describe('decoding test User story 1', ()=>{
            test('file 1 should be "123456789"',()=>{
                expect(ocr.getCodeFromFileAccessor(filePath1)).toBe("123456789");
            });
            test('file 2 should be "111999888"',()=>{
                expect(ocr.getCodeFromFileAccessor(filePath2)).toBe("111999888");
            });
            test('file 3 should be "912588934"',()=>{
                expect(ocr.getCodeFromFileAccessor(filePath3)).toBe("912588934");
            });
            test('file 4 should be "111111111"',()=>{
                expect(ocr.getCodeFromFileAccessor(filePath4)).toBe("111111111");
            });
            test('file 5 should be "921584964"',()=>{
                expect(ocr.getCodeFromFileAccessor(filePath5)).toBe("921584964");
            });
            test('file 6 should be "418900666"',()=>{
                expect(ocr.getCodeFromFileAccessor(filePath6)).toBe("418900666");
            });
        });
        describe('decoding test user story 3', ()=>{
            test('file 7 should be "12?13678?"', ()=>{
                expect(ocr.getCodeFromFileAccessor(filePath7)).toBe('?2?13678?');
            });
            test('file 8 should be "312?8?93?"', ()=>{
                expect(ocr.getCodeFromFileAccessor(filePath8)).toBe('312?8?93?');
            });
        });
    });

    describe('TabToString tests', ()=>{

        test('should be 0', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                "| |",
                "|_|",
            ])).toBe("0")
        });
        test('should be 1', ()=>{
            expect(codeArrayToString.convert([
                "   ",
                "  |",
                "  |",
            ])).toBe("1")
        });
        test('should be 2', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                " _|",
                "|_ ",
            ])).toBe("2")
        });
        test('should be 3', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                " _|",
                " _|"
            ])).toBe("3")
        });
        test('should be 4', ()=>{
            expect(codeArrayToString.convert([
                "   ",
                "|_|",
                "  |"
            ])).toBe("4")
        });
        test('should be 5', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                "|_ ",
                " _|"
            ])).toBe("5")
        });
        test('should be 6', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                "|_ ",
                "|_|"
            ])).toBe("6")
        });
        test('should be 7', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                "  |",
                "  |"
            ])).toBe("7")
        });
        test('should be 8', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                "|_|",
                "|_|"
            ])).toBe("8")
        });
        test('should be 9', ()=>{
            expect(codeArrayToString.convert([
                " _ ",
                "|_|",
                " _|"
            ])).toBe("9")
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

    describe('CheckSum validation, User Story 2', ()=> {
        test('should be false', () => {
            expect(ocr.isValidChecksum('123')).toBe(false);
        });
        test('should be false', () => {
            expect(ocr.isValidChecksum('0123456789')).toBe(false);
        });
        test('should be true', () => {
            expect(ocr.isValidChecksum('123456789')).toBe(true);
        });
        test('should be true', () => {
            expect(ocr.isValidChecksum('457508000')).toBe(true);
        });
        test('should be false', () => {
            expect(ocr.isValidChecksum('664371495')).toBe(false);
        });
        test('unreadable, should be false', () => {
            expect(ocr.isValidChecksum('?2?13678?')).toBe(false);
        });
        test('unreadable, should be false', () => {
            expect(ocr.isValidChecksum('312?8?93?')).toBe(false);
        });
    });
    describe('add code suffixes before write on file', ()=> {
        describe('user story 3', () => {
            test('should be "123 + ERR"', () => {
                expect(ocr.addSuffix('123')).toBe('123 ERR');
            });
            test('should be "0123456789 + ERR"', () => {
                expect(ocr.addSuffix('0123456789')).toBe('0123456789 ERR');
            });
            test('should be 457508000', () => {
                expect(ocr.addSuffix('457508000')).toBe('457508000');
            });
            test('should be "664371495 "664371495 ERR"', () => {
                expect(ocr.addSuffix('664371495')).toBe('664371495 ERR');
            });
        });
        describe('user story 4', () => {
            test('should be "?2?13678? ILL"', () => {
                expect(ocr.addSuffix('?2?13678?')).toBe('?2?13678? ILL');
            });
            test('should be "312?8?93? ILL"', () => {
                expect(ocr.addSuffix('312?8?93?')).toBe('312?8?93? ILL');
            });
        });
    });

    describe('output file, User Story 5',()=>{
        describe('one file', ()=> {
            test('code "123456789" should be write in "' + FilesPath.oneOutput + '"', () => {
                expect(FileWriter.whereWrite('123456789', true)).toBe(FilesPath.oneOutput);
            });
            test('code "111999888 ERR" should be write in "' + FilesPath.oneOutput + '"', () => {
                expect(FileWriter.whereWrite('111999888 ERR', true)).toBe(FilesPath.oneOutput);
            });
            test('code "418900666 ERR" should be write in "' + FilesPath.oneOutput + '"', () => {
                expect(FileWriter.whereWrite('418900666 ERR', true)).toBe(FilesPath.oneOutput);
            });
            test('code "?2?13678? ILL" should be write in "' + FilesPath.oneOutput + '"', () => {
                expect(FileWriter.whereWrite('?2?13678? ILL', true)).toBe(FilesPath.oneOutput);
            });
        });
        describe('several file', ()=>{
            test('code "111111111 ERR" should be write in "' + FilesPath.wrongChecksum + '"', ()=>{
                expect(FileWriter.whereWrite('111111111 ERR', false)).toBe(FilesPath.wrongChecksum);
            });
            test('code "921584964 ERR" should be write in "' + FilesPath.wrongChecksum + '"', ()=>{
                expect(FileWriter.whereWrite('921584964 ERR', false)).toBe(FilesPath.wrongChecksum);
            });
            test('code "912588934" should be write in "' + FilesPath.valid + '"', ()=>{
                expect(FileWriter.whereWrite('912588934', false)).toBe(FilesPath.valid);
            });
            test('code "312?8?93? ILL" should be write in "' + FilesPath.unreadable + '"', ()=>{
                expect(FileWriter.whereWrite('312?8?93? ILL', false)).toBe(FilesPath.unreadable);
            });
        });
    });
});
