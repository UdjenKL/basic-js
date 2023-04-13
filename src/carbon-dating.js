const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Проверяем, является ли sampleActivity строкой, не пустой ли она и является ли она числом
  if (typeof sampleActivity !== 'string' || !sampleActivity || isNaN(parseFloat(sampleActivity))) {
    return false; // Если не соответствует, то возвращаем false
  }

  const N = parseFloat(sampleActivity); // Преобразуем строку в число
  // Проверяем, находится ли значение в пределах допустимых значений активности
  if (N <= 0 || N > MODERN_ACTIVITY) {
    return false; // Если не соответствует, то возвращаем false
  }

  const k = 0.693 / HALF_LIFE_PERIOD; // Вычисляем константу распада
  const t = Math.log(MODERN_ACTIVITY / N) / k; // Вычисляем возраст находки по формуле радиоактивного распада

  return Math.ceil(t); // Округляем возраст до целого числа в большую сторону и возвращаем его
}

module.exports = {
  dateSample
};
