const { NotImplementedError } = require('../extensions/index.js');
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) { // объявление функции с параметром domains - массивом доменных имен
  const stats = {}; // создание пустого объекта stats, в который будет записываться статистика

  for (let domain of domains) { // цикл по всем доменным именам из переданного массива
    let subDomains = domain.split('.').reverse(); // создание массива поддоменных имен, разбивая текущее доменное имя по точкам, и инвертирование порядка элементов массива
    let current = ''; // создание пустой строки, которая будет использоваться для создания текущего доменного имени, включающего все поддомены

    for (let subDomain of subDomains) { // цикл по всем поддоменным именам из массива subDomains
      current += `.${subDomain}`; // добавление текущего поддомена к текущему доменному имени, разделяя их точкой
      if (stats[current]) { // если текущее доменное имя уже есть в объекте stats
        stats[current]++; // увеличить значение соответствующего свойства объекта на 1
      } else { // если текущего доменного имени нет в объекте stats
        stats[current] = 1; // создать новое свойство с ключом, равным текущему доменному имени, и значением, равным 1
      }
    }
  }

  return stats; // вернуть объект со статистикой
}

module.exports = {
  getDNSStats // экспорт функции getDNSStats для использования в других файлах
};
