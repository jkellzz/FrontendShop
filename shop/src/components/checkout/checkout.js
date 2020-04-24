import React from "react";
import "./style.css";
import { PayPalButton } from "react-paypal-button";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <h1>Review your order and Complete Checkout</h1>

      <div className="checkoutcontainer">
        <form className="shipping">
          <h2>Shipping Information</h2>
          <input
            className="shippingbox"
            type="text"
            placeholder="Email Address"
            required
          ></input>
          <input
            className="shippingbox"
            type="text"
            placeholder="First Name"
            required
          ></input>
          <input
            className="shippingbox"
            type="text"
            placeholder="Last Name"
            required
          ></input>
          <input
            className="shippingbox"
            type="text"
            placeholder="Address Line 1"
            required
          ></input>
          <input
            className="shippingbox"
            type="text"
            placeholder="Address Line 2"
          ></input>
          <input
            className="shippingbox"
            type="text"
            placeholder="Postal/Zip Code"
            required
          ></input>
          <input
            className="shippingbox"
            type="text"
            placeholder="City"
            required
          ></input>
          <input
            className="shippingbox"
            type="text"
            placeholder="State/Providence"
            required
          ></input>
          <select className="country" name="country">
            <option value="Select">Select Country</option>
            <option value="United States of America">
              United States of America
            </option>
          </select>
          <button className="shippingsave">Save Shipping Information</button>
        </form>
        <form className="billing">
          <h2>Billing Information</h2>
          <input
            className="billingbox"
            type="text"
            placeholder="Name as it appears on card"
            required
          ></input>
          <input
            className="billingbox"
            type="creditCard"
            placeholder="Card Number"
            required
          ></input>
          <input
            className="billingbox"
            type="expdate"
            placeholder="Expiration Date"
            required
          ></input>
          <input
            className="billingbox"
            type="text"
            placeholder="Security Code"
            required
          ></input>
          <button className="shippingsave">Save Billing Information</button>
        </form>
        <form className="cartcart">
          <h2 className="carttitle">Cart Summary</h2>
          <p>
            Subtotal: <p className="cost">$</p>
          </p>
          <p>
            Tax Added: <p className="cost">$</p>
          </p>
          <h3 className="total">
            Total: <p className="cost">$</p>
          </h3>
          <Link to="/">
            {" "}
            <button className="shippingsave">
              Click HERE to Submit Payment
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
