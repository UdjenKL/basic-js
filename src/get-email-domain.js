const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// Функция getEmailDomain должна принимать строку, представляющую адрес электронной почты и возвращать строку с доменом этого адреса. Например, для 'prettyandsimple@example.com' результатом должна быть строка 'example.com'.
// Эта функция использует метод slice для извлечения домена из строки адреса электронной почты. Метод lastIndexOf используется для нахождения последнего символа '@' в адресе электронной почты. Следующий символ после '@' представляет домен, который можно извлечь, используя метод slice.
function getEmailDomain(email) {
  return email.slice(email.lastIndexOf('@') + 1);
}
module.exports = {
  getEmailDomain
};
