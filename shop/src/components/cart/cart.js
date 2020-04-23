import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Cart(props) {
  console.log("props-Cart", props);

  let things = props.cart.map((x, y) => {
    return (
      <tbody>
        <tr>
          <td>{x.item}</td>
          <td>${x.price}</td>
          <td className="desc">{x.itemDescription}</td>
          <td>
            <button className="remove" onClick={() => props.handleClick(y)}>
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Remove</th>
            </tr>
          </thead>
          {things}
        </table>
        <Link to="/checkout">
          <button className="checkout">Checkout</button>
        </Link>
        <div>
          <td></td>
        </div>
      </div>
    </div>
  );
}

export default Cart;
