import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Upload from "./components/upload/upload";
import HistoryComp from "./components/history/history";
import Cart from "./components/cart/cart";
import { getAllItems } from "./services/api-helper";


function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const makeCall = async () => {
      const resp = await getAllItems();
      setItems(resp);
      setIsLoading(false);
    };
    makeCall();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <img
          className="logo"
          src="https://res.cloudinary.com/dtzbye6dy/image/upload/v1587394009/Screen_Shot_2020-04-20_at_10.43.36_AM_ze9dul.png"
        />
        <nav className="Navbar">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/history">
            <h2>History</h2>
          </Link>
          <Link to="/upload">
            <h2>Upload</h2>
          </Link>
          <Link to="/cart">
            <h2>Cart</h2>
          </Link>
        </nav>
      </header>
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={HistoryComp} />
            <Route path="/upload" component={Upload} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
