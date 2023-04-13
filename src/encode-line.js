const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // Проверяем, есть ли строка, и если нет, то возвращаем пустую строку
  if (!str) {
    return '';
  }

  // Инициализируем переменные result и count
  let result = '';
  let count = 1;

  // Проходим по всей строке str с помощью цикла for
  for (let i = 0; i < str.length; i++) {
    // Если текущий символ равен следующему символу, то увеличиваем счетчик count
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // Иначе, если символы не равны, добавляем в переменную result закодированный символ
      result += count > 1 ? count + str[i] : str[i];
      // Обнуляем счетчик count
      count = 1;
    }
  }

  // Возвращаем закодированную строку
  return result;
}

module.exports = {
  encodeLine
};
