const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) { // Конструктор класса принимает один необязательный параметр isDirect, который по умолчанию равен true
        this.isDirect = isDirect; // Значение параметра isDirect присваивается свойству объекта this.isDirect
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Создается строка символов, содержащая все буквы латинского алфавита в верхнем регистре
    }


    encrypt(message, key) { // Метод класса принимает два параметра - исходное сообщение и ключ
        if (!message || !key) throw new Error('Incorrect arguments!'); // Если какой-либо из параметров отсутствует или равен null, метод генерирует исключение с текстом 'Incorrect arguments!'
        message = message.toUpperCase(); // Исходное сообщение преобразуется к верхнему регистру
        key = key.toUpperCase(); // Ключ преобразуется к верхнему регистру
        let encryptedMessage = ''; // Создается пустая строка для хранения зашифрованного сообщения
        let keyIndex = 0; // Создается переменная для хранения индекса символа ключа
        for (let i = 0; i < message.length; i++) { // Цикл проходит по каждому символу исходного сообщения
            let messageSymbolIndex = this.alphabet.indexOf(message[i]); // Определяется индекс текущего символа исходного сообщения в алфавите
            if (messageSymbolIndex === -1) { // Если текущий символ не найден в алфавите
                encryptedMessage += message[i]; // Он добавляется к зашифрованному сообщению без изменений
                continue; // И цикл переходит к следующей итерации
            }
            let keySymbolIndex = this.alphabet.indexOf(key[keyIndex % key.length]); // Определяется индекс символа ключа, который будет использоваться для шифрования текущего символа исходного сообщения
            let newIndex = (messageSymbolIndex + keySymbolIndex) % this.alphabet.length; // Вычисляется новый индекс символа алфавита, соответствующего зашифрованному символу
            encryptedMessage += this.alphabet[newIndex]; // Зашифрованный символ добавляется к зашифрованному сообщению
            keyIndex++; // Индекс символа ключа увеличивается на 1
        }
        return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join(''); // Если значение this.isDirect равно true, метод возвращает зашифрованное сообщение, иначе - зашифрованное сообщение, записанное в обратном порядке
    }

    // Метод дешифрования строки, принимает зашифрованное сообщение и ключ.
    decrypt(encryptedMessage, key) {
// Если входные параметры не были переданы, выбрасываем исключение.
        if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
// Приводим все символы входных параметров к верхнему регистру.
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
// Инициализируем переменную, в которую будет записан результат расшифровки.
        let decryptedMessage = '';
// Инициализируем переменную, которая будет использоваться для перебора символов ключа.
        let keyIndex = 0;
// Проходим по каждому символу зашифрованного сообщения.
        for (let i = 0; i < encryptedMessage.length; i++) {
// Ищем индекс символа в алфавите.
            let encryptedSymbolIndex = this.alphabet.indexOf(encryptedMessage[i]);
// Если символ не найден, добавляем его в результат и переходим к следующему символу.
            if (encryptedSymbolIndex === -1) {
                decryptedMessage += encryptedMessage[i];
                continue;
            }
// Ищем индекс символа ключа, соответствующего текущему символу сообщения.
            let keySymbolIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
// Вычисляем новый индекс символа после дешифровки.
            let newIndex = (encryptedSymbolIndex - keySymbolIndex + this.alphabet.length) % this.alphabet.length;
// Добавляем дешифрованный символ в результат.
            decryptedMessage += this.alphabet[newIndex];
// Переходим к следующему символу ключа.
            keyIndex++;
        }
// Если был передан флаг isDirect со значением false, то разворачиваем строку.
        return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};
