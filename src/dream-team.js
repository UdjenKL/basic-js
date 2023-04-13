const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Проверяем, что аргумент members является массивом.
  if (!Array.isArray(members)) {
    // Если не является, возвращаем false.
    return false;
  }

  // Создаем пустой массив name для сохранения первых букв имени.
  const name = [];

  // Проходим по всем элементам массива members.
  for (let i = 0; i < members.length; i++) {
    // Проверяем, что текущий элемент является строкой.
    if (typeof members[i] === 'string') {
      // Удаляем пробелы с начала и конца строки.
      let trimmed = members[i].trim();
      // Добавляем первую букву имени в массив name, преобразовав ее в верхний регистр.
      name.push(trimmed[0].toUpperCase());
    }
  }

  // Сортируем массив name по алфавиту и объединяем элементы в строку.
  // Если name пустой, возвращаем false.
  return name.sort().join('') || false;
}


module.exports = {
  createDreamTeam
};
