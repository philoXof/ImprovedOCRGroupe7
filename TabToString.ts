export class TabToString {

    private zero : string[] = [
        " _ ",
        "| |",
        "|_|",
    ];
    private one : string[]  = [
        "   ",
        "  |",
        "  |",
    ];
    private two : string[]  = [
        " _ ",
        " _|",
        "|_ ",
    ];
    private tree : string[]  = [
        " _ ",
        " _|",
        " _|"
    ];
    private four : string[]  = [
        "   ",
        "|_|",
        "  |"
    ];
    private five : string[]  = [
        " _ ",
        "|_ ",
        " _|"
    ];
    private six : string[]  = [
        " _ ",
        "|_ ",
        "|_|"
    ];
    private seven : string[]  = [
        " _ ",
        "  |",
        "  |"
    ];
    private height : string[]  = [
        " _ ",
        "|_|",
        "|_|"
    ];
    private nine : string[] = [
        " _ ",
        "|_|",
        " _|"
    ];

    //ajouter string en retour pour renvoyer
    public tabToString(tab : string[]) : string {
        for (let [key,value] of this.keymap) if(JSON.stringify(value) == JSON.stringify(tab)) return key;
        return "0";
    }

    private keymap : Map<string,string[]> = new Map<string, string[]>();

    constructor() {
        this.keymap.set("0", this.zero);
        this.keymap.set("1", this.one);
        this.keymap.set("2", this.two);
        this.keymap.set("3", this.tree);
        this.keymap.set("4", this.four);
        this.keymap.set("5", this.five);
        this.keymap.set("6", this.six);
        this.keymap.set("7", this.seven);
        this.keymap.set("8", this.height);
        this.keymap.set("9", this.nine);
    }


}
