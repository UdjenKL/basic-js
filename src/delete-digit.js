const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// Функция deleteDigit должна принимать положительное целое число n и возвращать наибольшее число, которое можно получить, удалив одну цифру из числа n.
function deleteDigit(n) {
  let maxNum = 0; // Создаем переменную для хранения наибольшего числа

  // Преобразуем число в строку и перебираем каждую цифру
  n.toString().split('').forEach((digit, index, digits) => {
    const num = parseInt(digits.slice(0, index).join('') + digits.slice(index + 1).join('')); // Формируем число без текущей цифры
    if (num > maxNum) { // Если новое число больше наибольшего, то обновляем максимальное число
      maxNum = num;
    }
  });

  return maxNum; // Возвращаем наибольшее число
}

module.exports = {
  deleteDigit
};
