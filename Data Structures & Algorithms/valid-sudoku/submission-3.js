class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (board.length != 9 || board[0].length != 9)
            return false;

        const columns = new Map();
        const rows = new Map();
        const blocks = new Map();
        // check rows first
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] != ".") {
                    let val = board[i][j];
                    if (rows.has(i)) {
                        let row = rows.get(i);
                        console.log("Row: ", row)
                        if (row.includes(val)) {
                            return false;
                        }
                        rows.set(i, [...row, val]);
                    } else {
                        rows.set(i, [val]);
                    }
                    if (columns.has(j)) {
                        let col = columns.get(j);
                        console.log("Column: ", col)
                        if (col.includes(val)) {
                            return false;
                        }
                        columns.set(j, [...col, val]);
                    } else {
                        columns.set(j, [val]);
                    }
                    const blockId = `(${Math.floor(j/3)},${Math.floor(i/3)})`;
                    if (blocks.has(blockId)) {

                        const block = blocks.get(blockId);
                        console.log("block: ", block)
                        if (block.includes(val)) {
                            return false;
                        }
                        blocks.set(blockId, [...block, val]);
                    } else {
                        blocks.set(blockId, [val]);
                    }
                }
            }
        }
        return true;
        
    }
}
