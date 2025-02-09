/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */

export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  }
  if (size === 0) {
    return '';
  }

  let result = '';
  let count = 0;
  let lastChar = '';

  for (let char of string) {
    if (char === lastChar) {
      if (count < size) {
        result += char;
        count++;
      }
    } else {
      result += char;
      lastChar = char;
      count = 1;
    }
  }

  return result;
}



