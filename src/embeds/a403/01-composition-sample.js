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

export default GithubInfo;`,
      active: true,
    },
    'App.js': {
      code: `import GithubInfo from "./GithubInfo";

export default function App() {
  return <GithubInfo username={"dimasmds"} userId={25724809} />;
}`,
      hidden: false,
    },
    'styles.css': {
      code: `* {
  padding: 0;
  box-sizing: border-box;
}

.github-info {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 8px
}

.github-info img {
  width: 100px;
}

.github-info a {
  font-size: 1.5rem;
  text-decoration: none;
}
`,
      hidden: true,
    },
  };
  return (
    <ReactSandpack
      files={files}
      options={{
      }}
    />
  );
}

export default CompositionSample01;
