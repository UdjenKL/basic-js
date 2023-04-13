// Подключаем модуль для генерации ошибки при необходимости
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Если строка не задана, то вернем пустую строку
  if (str === undefined) {
    return '';
  }

  // Проверяем опции и устанавливаем значения по умолчанию, если они не заданы
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options || {};

  // Преобразуем параметры к строковому типу
  const strToString = String(str);
  const additionToString = String(addition);

  // Создаем массив для хранения строк-повторов
  const result = [];

  // Повторяем строку нужное количество раз с заданным разделителем
  for (let i = 0; i < repeatTimes; i++) {
    // Создаем временный массив для хранения строк с добавками
    const tempArr = [];

    // Добавляем строку с добавками нужное количество раз с заданным разделителем
    for (let j = 0; j < additionRepeatTimes; j++) {
      tempArr.push(additionToString);
    }

    // Объединяем строки с добавками в одну с заданным разделителем
    const tempStr = tempArr.join(additionSeparator);

    // Добавляем к результату текущую строку с добавками
    result.push(strToString + tempStr);
  }

  // Объединяем все строки-повторы в одну с заданным разделителем
  const finalStr = result.join(separator);

  // Возвращаем окончательную строку
  return finalStr;
}

// Экспортируем функцию repeater из модуля
module.exports = {
  repeater
};
