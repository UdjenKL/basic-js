const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      let messageSymbolIndex = this.alphabet.indexOf(message[i]);
      if (messageSymbolIndex === -1) {
        encryptedMessage += message[i];
        continue;
      }
      let keySymbolIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
      let newIndex = (messageSymbolIndex + keySymbolIndex) % this.alphabet.length;
      encryptedMessage += this.alphabet[newIndex];
      keyIndex++;
    }
    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let encryptedSymbolIndex = this.alphabet.indexOf(encryptedMessage[i]);
      if (encryptedSymbolIndex === -1) {
        decryptedMessage += encryptedMessage[i];
        continue;
      }
      let keySymbolIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
      let newIndex = (encryptedSymbolIndex - keySymbolIndex + this.alphabet.length) % this.alphabet.length;
      decryptedMessage += this.alphabet[newIndex];
      keyIndex++;
    }
    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
