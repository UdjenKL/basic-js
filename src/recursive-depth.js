const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // Класс, предназначенный для вычисления глубины вложенных массивов.

  // Метод calculateDepth принимает массив и вычисляет его глубину.
  calculateDepth(arr) {
    // Если аргумент не является массивом, глубина равна 0.
    if (!Array.isArray(arr)) {
      return 0;
    }

    // Изначально глубина равна 1, т.к. в самом начале мы имеем дело с переданным в метод массивом.
    let depth = 1;

    // Проходимся по элементам массива.
    for (let i = 0; i < arr.length; i++) {
      // Переменная, в которой будет храниться глубина текущего элемента.
      let currentDepth = 1;

      // Если текущий элемент массива является массивом, то вычисляем его глубину и добавляем 1.
      if (Array.isArray(arr[i])) {
        currentDepth += this.calculateDepth(arr[i]);
        // Перезаписываем глубину, если она больше предыдущей.
        depth = Math.max(depth, currentDepth);
      }
    }

    // Возвращаем глубину.
    return depth;
  }
}


module.exports = {
  DepthCalculator
};
