function capitalize(str) {
  if (str == null) return;
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function reverseString(str) {
  if (str == null) return;
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => {
    if (a == null || b == null) return;
    return a + b;
  },
  subtract: (a, b) => {
    if (a == null || b == null) return;
    return a - b;
  },
  divide: (a, b) => {
    if (a == null || b == null || b === 0) return;
    return a / b;
  },
  multiply: (a, b) => {
    if (a == null || b == null) return;
    return a * b;
  },
};

function caesarCipher(str, key) {
  if (str == null || key == null) return;
  const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str
    .toUpperCase()
    .split('')
    .map((letter) => {
      if (dict.indexOf(letter) === -1) {
        return letter;
      } else {
        let index = dict.indexOf(letter) + key;
        if (index > 25) index -= dict.length;
        else if (index < 0) index += dict.length;

        return dict[index];
      }
    })
    .join('');
}

function analyzeArray(arr) {
  if (arr == null) return;
  const length = arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const average = arr.reduce((pre, curr) => pre + curr) / length;
  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
