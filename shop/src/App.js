import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Upload from "./components/upload/upload";
import HistoryComp from "./components/history/history";
import Cart from "./components/cart/cart";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/history">
            <h2>History</h2>
          </Link>
          <Link to="/upload">
            <h2>Upload</h2>
          </Link>
        </nav>
      </header>
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={HistoryComp} />
            <Route path="/upload" component={Upload} />
            <Route path="cart" component={Cart} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
