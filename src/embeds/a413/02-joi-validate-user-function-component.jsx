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
  'App.js': {
    code: `\
import React from 'react';
import Joi from 'joi';
import { validateProps } from './utils';
import User from './User';

export default function App() {
  return (
    <>
      <User name="A" email="invalid-email" />
      <User name="Alice" email="alice@example.com" gender="Female" />
    </>
  );
}`,
    active: false,
  },
  'User.js': {
    code: `\
import React from 'react';
import Joi from 'joi';
import { validateProps } from './utils';

const userPropsSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ tlds: true }).required(),
  gender: Joi.string().valid("Male", "Female", "Prefer not to say").default("Prefer not to say"),
});

function User(props) {
  const { name, email, gender } = validateProps(userPropsSchema, props, 'User');

  return (
    <div className="user">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default User;
`,
    hidden: false,
    active: true,
  },
  'utils.js': {
    code: `\
import Joi from 'joi';

export function validateProps(schema, props, componentName) {
  const validationResult = schema.validate(props, { abortEarly: false });

  if (validationResult.error) {
    const { details } = validationResult.error;
    details.forEach((error) =>
      console.warn(\`[\${componentName}] Validation Error: \${error.message}\`)
    );
  }

  return validationResult.value;
}
`,
    hidden: false,
  },
  'styles.css': {
    code: `\
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}

.user {
  border-bottom: 1px solid black;
}`,
    hidden: true,
  },
};

function JoiValidateUserFunctionComponent02() {
  return (
    <ReactSandpack files={files} options={{ showConsole: true }} />
  );
}

export default JoiValidateUserFunctionComponent02;
