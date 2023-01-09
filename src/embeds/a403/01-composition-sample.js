import React from 'react';
import ReactSandpack from '../../components/sandpacks/ReactSandpack';

function CompositionSample01() {
  const files = {
    'GithubInfo.js': {
      code: `function ProfilePicture({ userId }) {
  return (
    <img
      src={"https://avatars.githubusercontent.com/u/" + userId}
      alt="GitHub Profile"
    />
  );
}

function ProfileLink({ username }) {
  return <a href={"https://github.com/" + username}>{username}</a>;
}

function GithubInfo({ username, userId }) {
  return (
    <div className="github-info">
      <ProfilePicture userId={userId} />
      <ProfileLink username={username} />
    </div>
  );
}

export default GithubInfo;

      `,
      active: true,
    },
    'App.js': {
      code: `import GithubInfo from "./GithubInfo";

export default function App() {
  return <GithubInfo username={"dimasmds"} userId={25724809} />;
}`,
      hidden: true,
    },
  };
  return (
    <ReactSandpack files={files} />
  );
}

export default CompositionSample01;
