import React from 'react';
import TestSandpack from '../../components/sandpacks/TestSandpack';

const files = {
  'typeTriangle.js': {
    code: `function typeTriangle (sideA, sideB, sideC) {
  if(sideA === sideB && sideB === sideC) {
    return 'Segitiga sama sisi';
  }
    
  if(sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'Segitiga sama kaki';
  }
    
  return 'Segitiga sembarang';
};

module.exports = typeTriangle;
`,
    hidden: false,
  },
  'typeTriangle.test.js': {
    code: `const typeTriangle = require("./typeTriangle");

describe("Sebuah fungsi typeTriangle", () => {
  it("harus mengembalikan segitiga sama sisi ketika semua nilai sisi sama", () => {
    expect(typeTriangle(4, 4, 4)).toEqual("Segitiga sama sisi");
    expect(typeTriangle(1, 1, 1)).toEqual("Segitiga sama sisi");
    expect(typeTriangle(8, 8, 8)).toEqual("Segitiga sama sisi");
  });

  it("harus mengembalikan segitiga sama kaki ketika ada dua nilai sisi yang sama", () => {
    expect(typeTriangle(2, 2, 1)).toEqual("Segitiga sama kaki");
    expect(typeTriangle(4, 2, 4)).toEqual("Segitiga sama kaki");
    expect(typeTriangle(1, 3, 3)).toEqual("Segitiga sama kaki");
  });

  it("harus mengembalikan segitiga sembarang ketika tidak ada nilai sisi yang sama", () => {
    expect(typeTriangle(4, 2, 1)).toEqual("Segitiga sembarang");
    expect(typeTriangle(2, 3, 5)).toEqual("Segitiga sembarang");
    expect(typeTriangle(8, 2, 1)).toEqual("Segitiga sembarang");
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
