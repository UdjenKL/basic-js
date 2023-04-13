const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0; // Создаем переменную для хранения количества общих символов

  // Преобразуем строки в массивы символов и перебираем каждый символ первой строки
  s1.split('').forEach(char => {
    const index = s2.indexOf(char); // Ищем индекс текущего символа во второй строке
    if (index !== -1) { // Если символ найден, то увеличиваем счетчик и удаляем символ из второй строки
      count++;
      s2 = s2.slice(0, index) + s2.slice(index + 1);
    }
  });

  return count; // Возвращаем количество общих символов
}

module.exports = {
  getCommonCharacterCount
};
