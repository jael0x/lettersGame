
export interface ILetter {
    char: string;
    selected: boolean;
}


export const mapLetterArray = (letters: Array<string>, chunk: number): any => {
    letters.sort(() => 0.5 - Math.random());
    let row = 1;
    let col = 0;
    let lettersMap: any = {};
    let subMap: any = {};
    letters.forEach(char => {
        col++;
        if (col > chunk) {
            col = 1;
            row++;
        }
        if (row > chunk) row = 1;
        let obj: ILetter = {
            char,
            selected: false
        };
        subMap[col] = { ...obj };
        lettersMap[row] = { ...subMap };
    });
    return lettersMap;
}
