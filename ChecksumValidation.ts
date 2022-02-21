export class ChecksumValidation{
    public isValid(code : string) : boolean {
        if(code.length != 9) return false;
        let checksum : number = 0;
        for (let i = 0,j = 9; i < code.length; i++,j--)
            checksum += Number(code[i]) * j;
        return checksum % 11 == 0;
    }
}
