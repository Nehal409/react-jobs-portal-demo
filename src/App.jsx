import React from 'react';

const App = () => {
  const name = 'John';
  const names = ['John', 'James', 'Mary', 'Josh', 'Jacob'];
  const loggedIn = true;

  return (
    <div>
      <div className="text-5xl">App</div>
      <p style={{color: 'red', fontSize: '29px'}}>Hello {name}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {loggedIn && <h1>Hello Admin</h1>}
    </div>
  );
};
export default App;
