const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// Используем функцию sortByHeight, которая принимает на вход массив arr.
function sortByHeight(arr) {
// Создадим массив sortedArr для хранения отсортированных значений без -1.
  let sortedArr = arr.filter((num) => num !== -1).sort((a, b) => a - b);
// Создадим массив resultArr для хранения результата с учетом -1 в исходном массиве arr.
  let resultArr = [];
// Используем цикл for для перебора элементов в массиве arr.
  for (let i = 0; i < arr.length; i++) {
// Если элемент arr[i] равен -1, то добавляем -1 в resultArr.
    if (arr[i] === -1) {
      resultArr.push(arr[i]);
// Иначе добавляем первый элемент из отсортированного массива sortedArr в resultArr и удаляем его из sortedArr.
    } else {
      resultArr.push(sortedArr[0]);
      sortedArr.shift();
    }
  }
// Возвращаем resultArr.
  return resultArr;
}

module.exports = {
  sortByHeight
};
