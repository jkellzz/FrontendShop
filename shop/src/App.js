import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Upload from "./components/upload/upload";
import HistoryComp from "./components/history/history";
import Cart from "./components/cart/cart";
import { getAllItems, getAllReviews } from "./services/api-helper";
import Description from "./components/description/description";
import Checkout from "./components/checkout/checkout";

function App() {
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("cart", cart);
  };

  const removeFromCart = (index) => {
    let newProducts = [...cart];
    newProducts.splice(index, 1);
    setCart(newProducts);
  };

  useEffect(() => {
    const makeCall = async () => {
      const resp = await getAllItems();
      setItems(resp);
      setIsLoading(false);
    };
    makeCall();
  }, []);

  useEffect(() => {
    const makeCall = async () => {
      const resp = await getAllReviews();
      setReviews(resp);
      setIsLoading(false);
    };
    makeCall();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <img
          className="logo"
          src="https://res.cloudinary.com/dtzbye6dy/image/upload/v1587414749/Screen_Shot_2020-04-20_at_4.29.41_PM_mmdbb0.png"
        />
        <nav className="Navbar">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/history">
            <h2>History</h2>
          </Link>
          <Link to="/upload">
            <h2>Sell</h2>
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
            <Route
              path="/cart"
              render={() => <Cart cart={cart} handleClick={removeFromCart} />}
            />
            <Route
              path="/description/:id"
              render={(routerProps) => (
                <Description
                  items={items}
                  reviews={reviews}
                  match={routerProps.match}
                  handleAdd={addToCart}
                />
              )}
            />
            <Route path="/checkout" component={Checkout} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
