export class Checksum{
    static isValidChecksum(code : string) : boolean {
        if(code.length != 9 || code.includes('?'))
            return false;
        let checksum : number = 0;
        for (let i = 0,j = 9; i < code.length; i++,j--)
            checksum += Number(code[i]) * j;
        return checksum % 11 == 0;
    }

    static addSuffix(code : string) : string {
        if(code.includes('?')) return code + " ILL";
        return this.isValidChecksum(code) ? code : code+ " ERR";
    }
}
