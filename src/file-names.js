const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = []; // создаем массив для результата
  const files = {}; // создаем объект для отслеживания уже имеющихся файлов

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (!files[name]) { // если такого файла еще нет в объекте, добавляем его в результат и помечаем как имеющийся
      files[name] = 1;
      result.push(name);
    } else { // если такой файл уже есть в объекте, добавляем суффикс и повторно проверяем наличие
      const newName = `${name}(${files[name]})`;
      files[name]++;
      files[newName] = 1;
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
