import React from 'react';
import NodeSandpack from '../../components/sandpacks/NodeSandpack';

const files = {
  'utils.js': {
    code: `\
function getUser(id) {
  if (!id) throw new Error("User ID is required");
  
  return { id, name: 'John Doe', location: "Jakarta" };
}

function getWeather(location) {
  if (location === "Jakarta") {
    return { weather: "Sunny", temperature: 30 };
  }

  throw new Error("Location not found");
}

module.exports = { getUser, getWeather };
`,
  },
  'index.js': {
    code: `\
const { getUser, getWeather } = require('./utils');

function getUserWeather(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const userWeather = getUserWeather(1);
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
`,
  },
};

function UserWeatherSync05() {
  return (
    <NodeSandpack files={files} />
  );
}

export default UserWeatherSync05;
