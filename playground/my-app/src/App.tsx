import React from 'react';
import logo from './logo.svg';
import './App.css';


const Sensitive1Object = {
  Sensitive1: 'Sensitive1',
  Sensitive3: 'Sensitive3'
}


const Sensitive1FunctionSensitive3 = (someSensitive1: string) => {
  const someSensitive2 = someSensitive1 + 'someSensitive3 lorem ipsum'

  return someSensitive2
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{Sensitive1FunctionSensitive3('blah')}</div>
        <p>{Sensitive1Object.Sensitive1}</p>
        <p>{Sensitive1Object.Sensitive3}</p>
      </header>
    </div>
  );
}

export default App;
