import * as Functions from './functions.js';

test('A capitalize function that takes a string and returns it with the first character capitalized.', () => {
  const cases = [
    {
      input: '',
      expected: '',
    },
    {
      input: null,
      expected: undefined,
    },
    {
      input: 'jeff',
      expected: 'Jeff',
    },
    {
      input: 'sussy baka',
      expected: 'Sussy Baka',
    },
    {
      input: 'baka onii-chan',
      expected: 'Baka Onii-chan',
    },
  ];

  cases.forEach((c) => {
    const actual = Functions.capitalize(c.input);
    expect(actual).toBe(c.expected);
  });
});

test('A reverseString function that takes a string and returns it reversed.', () => {
  const cases = [
    {
      input: 'gnirts desrever a si siht',
      expected: 'this is a reversed string',
    },
    {
      input: 'brutalseggs',
      expected: 'sggeslaturb',
    },
    {
      input: '',
      expected: '',
    },
    {
      input: 'UwU',
      expected: 'UwU',
    },
    {
      input: null,
      expected: undefined,
    },
  ];

  cases.forEach((c) => {
    const actual = Functions.reverseString(c.input);
    expect(actual).toBe(c.expected);
  });
});

test('A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.', () => {
  const calculator = Functions.calculator;
  const cases = {
    add: [
      {
        input: [1, 1],
        expected: 2,
      },
      {
        input: [null, null],
        expected: undefined,
      },
      {
        input: [-1, -4],
        expected: -5,
      },
      {
        input: [1020, 2341],
        expected: 3361,
      },
    ],
    subtract: [
      {
        input: [2, 1],
        expected: 1,
      },
      {
        input: [null, null],
        expected: undefined,
      },
      {
        input: [-10, 4],
        expected: -14,
      },
      {
        input: [2.5, 3],
        expected: -0.5,
      },
    ],
    divide: [
      {
        input: [null, null],
        expected: undefined,
      },
      {
        input: [4, 2],
        expected: 2,
      },
      {
        input: [3, 0],
        expected: undefined,
      },
      {
        input: [-4, 2],
        expected: -2,
      },
      {
        input: [25, 2],
        expected: 12.5,
      },
    ],
    multiply: [
      {
        input: [2, 1],
        expected: 2,
      },
      {
        input: [0, 4],
        expected: 0,
      },
      {
        input: [null, null],
        expected: undefined,
      },
      {
        input: [10, 30],
        expected: 300,
      },
    ],
  };
  cases.add.forEach((c) => {
    expect(calculator.add(...c.input)).toBe(c.expected);
  });
  cases.subtract.forEach((c) => {
    expect(calculator.subtract(...c.input)).toBe(c.expected);
  });
  cases.divide.forEach((c) => {
    expect(calculator.divide(...c.input)).toBe(c.expected);
  });
  cases.multiply.forEach((c) => {
    expect(calculator.multiply(...c.input)).toBe(c.expected);
  });
});

test('A caesarCipher function that takes a string and a shift factor and returns it with each character (letter only) "shifted" in uppercase.', () => {
  expect(Functions.caesarCipher()).toBe(undefined);
  expect(
    Functions.caesarCipher('the quick brown fox jumped over the lazy dogs', 15)
  ).toBe('IWT FJXRZ QGDLC UDM YJBETS DKTG IWT APON SDVH');
  expect(Functions.caesarCipher('Loli in basement.', 9)).toBe(
    'UXUR RW KJBNVNWC.'
  );
  expect(Functions.caesarCipher('B-baka Onii-chan!', -3)).toBe(
    'Y-YXHX LKFF-ZEXK!'
  );
  expect(Functions.caesarCipher('$ensei them bulul', 27)).toBe(
    '$FOTFJ UIFN CVMVM'
  );
});

test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
  expect(Functions.analyzeArray()).toBe(undefined);
  expect(Functions.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(Functions.analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
  expect(Functions.analyzeArray([1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 2,
  });
});
