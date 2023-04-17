const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length; // определяем количество строк матрицы
  const cols = matrix[0].length; // определяем количество столбцов матрицы
  const resMatrix = []; // создаем пустую матрицу, куда будем записывать результат

  for (let i = 0; i < rows; i++) { // перебираем каждую строку матрицы
    resMatrix[i] = []; // создаем пустой массив для i-ой строки в новой матрице
    for (let j = 0; j < cols; j++) { // перебираем каждый столбец в i-ой строке
      let bombsCount = 0; // создаем переменную для хранения количества бомб в соседних ячейках
      for (let ii = Math.max(i - 1, 0); ii <= Math.min(i + 1, rows - 1); ii++) { // перебираем все строки вокруг i-ой строки
        for (let jj = Math.max(j - 1, 0); jj <= Math.min(j + 1, cols - 1); jj++) { // перебираем все столбцы вокруг j-ого столбца
          if (matrix[ii][jj] && !(ii === i && jj === j)) { // если значение в ячейке равно true (бомба) и это не текущая ячейка
            bombsCount++; // увеличиваем счетчик бомб
          }
        }
      }
      resMatrix[i][j] = bombsCount; // записываем количество бомб в новую матрицу
    }
  }

  return resMatrix; // возвращаем новую матрицу
}



module.exports = {
  minesweeper
};
