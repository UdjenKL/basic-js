const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// Используем функцию getSumOfDigits, которая принимает на вход число n.
function getSumOfDigits(n) {
// Используем цикл while для повторения процесса суммирования цифр, пока n не будет однозначным числом.
  while (n > 9) {
// Преобразуем число в строку, разбиваем его на массив символов с помощью метода split, суммируем числа с помощью метода reduce и присваиваем результат переменной n.
    n = String(n).split('').reduce((acc, num) => acc + Number(num), 0);
  }
// Возвращаем n.
  return n;
}



module.exports = {
  getSumOfDigits
};
