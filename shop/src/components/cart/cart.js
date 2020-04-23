import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Cart(props) {
  console.log("props-Cart", props);
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

            {/* <tbody>

                {props.user.userData && props.user.userData.history &&
                props.user.userData.history.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.dateOfPurchase}</td>
                    </tr>
                  ))}
              </tbody> */}
          </thead>
          <tbody>
            <tr>
              <td>{props.cart[0].item}</td>
              <td>${props.cart[0].price}</td>
              <td className="desc">{props.cart[0].itemDescription}</td>
              <td>
                <button className="remove">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/checkout">
          <button className="checkout">Checkout</button>
        </Link>
      </div>
      This is Cart
    </div>
  );
}

export default Cart;
