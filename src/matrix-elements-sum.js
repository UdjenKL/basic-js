const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let isZeroFound = false;

  for (let j = 0; j < matrix[0].length; j++) { // цикл for для обхода элементов матрицы по столбцам
    for (let i = 0; i < matrix.length; i++) { // цикл for для обхода элементов матрицы по строкам
      if (matrix[i][j] === 0) { // если текущий элемент равен 0
        isZeroFound = true; // устанавливаем флаг, что был найден 0
      }
      if (!isZeroFound) { // если флаг не был установлен
        sum += matrix[i][j]; // добавляем текущий элемент к сумме
      }
    }
    isZeroFound = false; // сбрасываем флаг, чтобы начать новый столбец
  }

  return sum; // возвращаем сумму элементов
}


module.exports = {
  getMatrixElementsSum
};
