import React from 'react';
import TestSandpack from '../../../components/sandpacks/TestSandpack';

const files = {
  'add.test.ts': {
    hidden: false,
    code: `\
function concatStrings(strA, strB) {
  return strA + strB;
}

describe('Test Playground', () => {
  test('Should be able to concat string \`Hello\` and \`World\`', () => {
    expect(concatStrings('Hello', 'World')).toBe('HelloWorld');
  });
  
  test('Should be able to concat \`1\` and \`2\`', () => {
    expect(concatStrings('1', '2')).toBe('12');
  });
});
`,
  },
};

function Playground01() {
  return (
    <TestSandpack
      files={{ ...files }}
      options={{
        editorWidthPercentage: 65,
      }}
    />
  );
}

export default Playground01;
