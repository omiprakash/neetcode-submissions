class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rows = new Set()
        let cols = new Set()
        for(let i=0; i< matrix.length; i++) {
            for(let j=0; j< matrix[0].length; j++) {
                if(matrix[i][j] === 0) {
                    rows.add(i)
                    cols.add(j)
                }
            }
        }
        for(let row of rows) {
            for(let j=0; j<matrix[0].length;j++) {
                matrix[row][j] = 0
            }
        }
        for(let col of cols) {
            for(let j=0; j<matrix.length; j++) {
                matrix[j][col] = 0
            }
        }

        return matrix
    }
}
