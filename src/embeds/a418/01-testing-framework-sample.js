import React from 'react';
import TestSandpack from '../../components/sandpacks/TestSandpack';

const files = {
  'detectTriangle.js': {
    code: `const detectTriangle = (sideA, sideB, sideC) => {
  if (sideA === sideB && sideB === sideC) {
    return "Segitiga sama sisi";
  }

  if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
};

module.exports = detectTriangle;
`,
    hidden: false,
  },
  'detectTriangle.test.js': {
    code: `const detectTriangle = require("./detectTriangle");

describe("Sebuah fungsi detectTriangle", () => {
  it("harus mengembalikan segitiga sama sisi ketika semua nilai sisi sama", () => {
    expect(detectTriangle(4, 4, 4)).toEqual("Segitiga sama sisi");
    expect(detectTriangle(1, 1, 1)).toEqual("Segitiga sama sisi");
    expect(detectTriangle(8, 8, 8)).toEqual("Segitiga sama sisi");
  });

  it("harus mengembalikan segitiga sama kaki ketika ada dua nilai sisi yang sama", () => {
    expect(detectTriangle(2, 2, 1)).toEqual("Segitiga sama kaki");
    expect(detectTriangle(4, 2, 4)).toEqual("Segitiga sama kaki");
    expect(detectTriangle(1, 3, 3)).toEqual("Segitiga sama kaki");
  });

  it("harus mengembalikan segitiga sembarang ketika tidak ada nilai sisi yang sama", () => {
    expect(detectTriangle(4, 2, 1)).toEqual("Segitiga sembarang");
    expect(detectTriangle(2, 3, 5)).toEqual("Segitiga sembarang");
    expect(detectTriangle(8, 2, 1)).toEqual("Segitiga sembarang");
  });
});`,
    hidden: false,
    active: true,
  },
  'add.ts': { hidden: true },
  'add.test.ts': { hidden: true },
};

function TestingFrameworkSample01() {
  return (
    <TestSandpack files={files} />
  );
}

export default TestingFrameworkSample01;
