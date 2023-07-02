import React, { useState } from 'react';

const MorseDecoder = () => {
    const [morseCode, setMorseCode] = useState('');
    const [decodedText, setDecodedText] = useState('');
  
    const morseCodeMap = {
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '-----': '0',
      '.-.-.-': '.',
      '--..--': ',',
      '..--..': '?',
      '.----.': "'",
      '-.-.--': '!',
      '-..-.': '/',
      '-.--.': '(',
      '-.--.-': ')',
      '.-...': '&',
      '---...': ':',
      '-.-.-.': ';',
      '-...-': '=',
      '.-.-.': '+',
      '-....-': '-',
      '..--.-': '_',
      '.-..-.': '"',
      '...-..-': '$',
      '.--.-.': '@',
      ' ': ' ',
    };
  
    const handleInputChange = (event) => {
      const input = event.target.value;
      setMorseCode(input);
      decodeMorseCode(input);
    };
  
    const decodeMorseCode = () => {
      const words = morseCode.trim().split('   '); // Split the Morse code into words
      const decodedWords = words.map((word) => {
        const characters = word.split(' '); // Split each word into characters
        const decodedCharacters = characters.map((character) => {
          return morseCodeMap[character] || ''; // Map Morse code character to text
        });
        return decodedCharacters.join(''); // Join the characters to form a word
      });
      setDecodedText(decodedWords.join(' ')); // Join the words to form the decoded text
    };
  
    return (
      <div>
        <h2>Morse Code Decoder</h2>
        <textarea
          placeholder="Enter Morse code here..."
          value={morseCode}
          onChange={handleInputChange}
        />
        <button onClick={decodeMorseCode}>Decode</button>
        <h3>Decoded Text:</h3>
        <p>{decodedText}</p>
      </div>
    );
  };
  
export {MorseDecoder};
