const { NotImplementedError } = require('../extensions/index.js');

/**
 * MAC-48 адрес состоит из шести групп из двух шестнадцатеричных цифр (от 0 до 9 или от A до F),
 * разделенных дефисами.
 *
 * Ваша задача - проверить, является ли данный строковый вход inputString
 * MAC-48 адресом или нет.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * Для 00-1B-63-84-45-E6 вывод должен быть true.
 *
 */
function isMAC48Address(inputString) {
  const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/; // шаблон для MAC-48 адреса

  return macAddressRegex.test(inputString); // проверяем соответствует ли строка шаблону
}

module.exports = {
  isMAC48Address
};
