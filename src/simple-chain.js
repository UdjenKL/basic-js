const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    // Проверяем, является ли позиция корректной:
    // если меньше или равна 0, больше длины цепи или не является целым числом,
    // то очищаем цепь и выбрасываем ошибку.
    if (position <= 0 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    // Удаляем элемент из цепи по указанной позиции.
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    // Меняем порядок элементов в цепи на обратный.
    this.chain.reverse();
    return this;
  },

  finishChain() {
    // Преобразуем цепь в строку, соединив ее элементы разделителем '~~'.
    const result = this.chain.join('~~');
    // Очищаем цепь.
    this.chain = [];
    return result;
  }
}

  module.exports = {
  chainMaker
};
