import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TestApp</h1>
        <p>Welcome to the TestApp!</p>
      </header>
      <main>
        <h2>API Status:</h2>
        <p>Check <a href="/test">/test</a> for a test message.</p>
      </main>
    </div>
  );
}

export default App;
