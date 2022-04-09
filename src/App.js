import React from 'react';

function Food({ type }) {
  return <h2>I loke {type}</h2>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food type="Soup" />
      <Food type="Kimchi" />
      <Food type="Ramen" />
    </div>
  );
}

export default App;
