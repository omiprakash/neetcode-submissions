class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    /**
     * left -> right
     * top-> bottom
     * right -> left
     * bottom -> top
     */
    spiralOrder(matrix) {
        let result = [];
        let top = 0;
        let bottom = matrix.length - 1;
        let right = matrix[0].length - 1;
        let left = 0;
        while(top <= bottom && left <= right) {
            // left -> right
            for(let i = left; i<= right; i++) {
                result.push(matrix[top][i])
            }
            top++
            // top -> bottom
            for(let i = top; i <= bottom; i++) {
                result.push(matrix[i][right])
            }
            right--

            if(top <= bottom) {
                // right -> left
                for(let i=right; i>=left; i--) {
                    result.push(matrix[bottom][i])
                }
                bottom--
            }

            if(left <= right) {
                //bottom -> top
                for(let i=bottom; i>=top; i--) {
                    result.push(matrix[i][left])
                }
                left++
            }
        }
        return result
    }
}
