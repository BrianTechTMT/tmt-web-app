import React, { useState } from 'react';

const Morsify = () => {
  const [message, setMessage] = useState('');
  const [morseCode, setMorseCode] = useState('');

  const morseCodeMap = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    _: '..--.-',
    '"': '.-..-.',
    $: '...-..-',
    '@': '.--.-.',
    ' ': ' ',
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setMessage(input);
    convertToMorseCode(input);
  };

  const convertToMorseCode = (text) => {
    const words = text.trim().toUpperCase().split(' ');
    const encodedWords = words.map((word) => {
      const characters = word.split('');
      const encodedCharacters = characters.map((character) => {
        return morseCodeMap[character] || '';
      });
      return encodedCharacters.join(' ');
    });
    setMorseCode(encodedWords.join('   '));
  };

  return (
    <div>
      <h2>Morse Code Converter</h2>
      <textarea
        placeholder="Enter your message here..."
        value={message}
        onChange={handleInputChange}
      />
      <h3>Morse Code:</h3>
      <p>{morseCode}</p>
    </div>
  );
};

export {Morsify};
