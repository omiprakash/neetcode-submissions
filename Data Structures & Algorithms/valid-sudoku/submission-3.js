class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const boxes = Array.from({length: 9}, () => new Set());
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === '.') continue;
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }
        return true;
        // const rows = new Map();
        // const cols = new Map();
        // const squares = new Map();

        // for (let r = 0; r < 9; r++) {
        //     for (let c = 0; c < 9; c++) {

        //         const value = board[r][c];

        //         if (value === '.') continue;

        //         const squareKey =
        //             `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

        //         if (!rows.has(r)) rows.set(r, new Set());
        //         if (!cols.has(c)) cols.set(c, new Set());
        //         if (!squares.has(squareKey))
        //             squares.set(squareKey, new Set());

        //         if (
        //             rows.get(r).has(value) ||
        //             cols.get(c).has(value) ||
        //             squares.get(squareKey).has(value)
        //         ) {
        //             return false;
        //         }

        //         rows.get(r).add(value);
        //         cols.get(c).add(value);
        //         squares.get(squareKey).add(value);
        //     }
        // }

        // return true;
    }
}
