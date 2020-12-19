/**
 * 先水平旋转，再对角线旋转。
 * 水平旋转是上下交换元素；matrix[i][j] = matrix[len - i - 1][j];
 * 对角线旋转是按照对角线交换元素；matrix[i][j] = matrix[j][i];
 */
var rotate = function(matrix) {
    const n = matrix.length;
    // 水平旋转
    const tempI = Math.floor(n / 2);
    for(let i = 0; i < tempI; i++) {
        for(let j = 0; j < n; j++) {
            const temp = matrix[n - i - 1][j];
            matrix[n - i - 1][j] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    // 对角线旋转
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
};
