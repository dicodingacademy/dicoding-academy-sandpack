import React from 'react';
import ReactSandpack from '../../components/sandpacks/ReactSandpack';

const files = {
  'package.json': {
    code: `\
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-scripts": "^5.0.0",
    "joi": "^18.0.1"
  },
  "main": "/index.js",
  "devDependencies": {}
}`,
    hidden: true,
  },
  'index.js': {
    code: `\
import Joi from 'joi';

function validateUser(userToValidate) {
  const userPropsSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email({ tlds: true }).required(),
    gender: Joi.string().valid("Male", "Female", "Prefer not to say").default("Prefer not to say"),
  });

  const validationResult = userPropsSchema.validate(userToValidate, { abortEarly: false });

  if (validationResult.error) {
    const { details } = validationResult.error;
    details.forEach((error) => console.warn(\`Validation Error: \${error.message}\`));
  }

  return validationResult.value;
}



// contoh penggunaan 
const userInvalid = { name: "A", email: "invalid-email" }; // both name and email are invalid
const userValid = { name: "Alice", email: "alice@example.com" }; // valid user

const userInvalidValidated = validateUser(userInvalid);
const userValidValidated = validateUser(userValid);

console.log(\`Validated Invalid User: \${JSON.stringify(userInvalidValidated)}\`);
console.log(\`Validated Valid User: \${JSON.stringify(userValidValidated)}\`);

/**
 * Output:
 * Validation Error: "name" length must be at least 2 characters long
 * Validation Error: "email" must be a valid email
 * Validated Invalid User: { name: 'A', email: 'invalid-email', gender: 'Prefer not to say' }
 * Validated Valid User: {
 *   name: 'Alice',
 *   email: 'alice@example.com',
 *   gender: 'Prefer not to say'
 * }
 */
`,
    active: true,
  },
  'App.js': {
    code: '',
    hidden: true,
    active: false,
  },
};

function JoiValidateUser01() {
  return (
    <ReactSandpack files={files} options={{ showConsole: true }} consoleOnly />
  );
}

export default JoiValidateUser01;
