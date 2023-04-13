const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  // объединяем все элементы матрицы в один массив (один уровень вложения)
  let MatrixFlattened = matrix.flat();
  console.log(MatrixFlattened);

  // фильтруем массив, оставляя только элементы со значением "^^"
  let cats = MatrixFlattened.filter(item => item === "^^");

  // console.log(cats);
  return cats.length;
}
console.log(countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]));

module.exports = {
  countCats
};
