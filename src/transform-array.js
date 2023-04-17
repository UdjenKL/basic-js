const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // Проверяем, что передан аргумент-массив, иначе выбрасываем ошибку
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        // Пропускаем следующий элемент
        i++;
        break;
      case '--discard-prev':
        // Если предыдущий элемент не был помечен как "--discard-next" и это не первый элемент результирующего массива,
        // то удаляем последний элемент из результирующего массива
        if (arr[i - 2] !== '--discard-next' && i !== 0) {
          result.pop();
        }
        break;
      case '--double-next':
        // Если следующий элемент существует, добавляем его в результирующий массив
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        // Если это не первый элемент и предыдущий элемент не был помечен как "--discard-next",
        // добавляем предыдущий элемент в результирующий массив
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;
      default:
        // Добавляем текущий элемент в результирующий массив
        result.push(arr[i]);
        break;
    }
  }

  return result;
}


module.exports = {
  transform
};
