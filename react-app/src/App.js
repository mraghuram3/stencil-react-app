import logo from "./logo.svg";

import { KfButton, MyComponent, KfIcon } from "primitive-comp-react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <KfButton>Test</KfButton>
        <MyComponent />
        <div>
          <br />
          <KfIcon icon="Warning" size="20" type="1.25px" />
          <KfIcon icon="Warning" size="28" type="2px" />
          <br />
          <KfIcon icon="Watch" />
        </div>
      </header>
    </div>
  );
}

export default App;
