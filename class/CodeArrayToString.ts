export class CodeArrayToString {
    static convert(tab : string[]) : string {
        for (let [key,value] of this.keymap)
            if(JSON.stringify(value) == JSON.stringify(tab))
                return key;
        return "?";
    }

    static keymap : Map<string,string[]> = new Map([
        ["0" , [
            " _ ",
            "| |",
            "|_|",]],
        ["1",[
            "   ",
            "  |",
            "  |",]],
        ["2",[
            " _ ",
            " _|",
            "|_ ",]],
        ["3" ,[
            " _ ",
            " _|",
            " _|"]],
        ["4" ,[
            "   ",
            "|_|",
            "  |"]],
        ["5" ,[
            " _ ",
            "|_ ",
            " _|"
            ]],
        ["6" , [
            " _ ",
            "|_ ",
            "|_|"
            ]],
        ["7" ,[
            " _ ",
            "  |",
            "  |"
            ]],
        ["8" ,[
            " _ ",
            "|_|",
            "|_|"
            ]],
        ["9" ,[
            " _ ",
            "|_|",
            " _|"
            ]]
    ]);
}
