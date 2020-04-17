import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home";
import Upload from "./components/upload/upload";
import HistoryComp from "./components/history/history";
import Cart from "./components/cart/cart";

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
      </header>
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={HistoryComp} />
            <Route path="/upload" component={Upload} />
            <Route path="cart" component={Cart} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
