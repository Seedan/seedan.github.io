import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter</h1>
        <p>{count}</p>
        <button onClick={increment}>Прибавить</button>
        <button onClick={decrement}>Отнять</button>
      </header>
    </div>
  );
}

export default App;
