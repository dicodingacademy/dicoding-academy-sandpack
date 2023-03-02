import React from 'react';
import NodeSandpack from '../../components/sandpacks/NodeSandpack';

const files = {
  'utils.js': {
    code: `\
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new Error("User ID is required"));
      }

      resolve({ id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
  });
}

function getWeather(location) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!location) {
        reject(new Error("Location is required"));
      }

      resolve({ weather: "Sunny", temperature: 30 });
    }, 1000);
  });
}

module.exports = { getUser, getWeather };
`,
    hidden: true,
  },
  'index.js': {
    code: `\
const { getUser, getWeather } = require('./utils');

function getUserWeather(userId) {
  let user;
  
  return getUser(userId)
    .then((_user) => { 
      user = _user;
      return getWeather(user.location)
    })
    .then((weather) => ({ ...user, ...weather }))
}

getUserWeather(1)
  .then(console.log)
  .catch(console.log);

`,
  },
};

function UserWeatherPromise07() {
  return (<NodeSandpack files={files} />);
}

export default UserWeatherPromise07;
