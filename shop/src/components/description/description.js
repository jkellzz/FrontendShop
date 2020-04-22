import React, { useState } from "react";
import "./style.css";

function Description(props) {
  const itemDisplay = props.products.filter((item, key) => {
    return item.title === props.match.params.item;
  });

  const [cart, setCart] = useState([]);
  const [item, setItem] = useState([]);

  //this will add the item that is displayed to the cart
  const addToCart = () => {
    setItem = itemDisplay[0];
    return <div>yes</div>;
  };

  //here will be a function that will send the cart to the actual cart component to render it.

  //this is to alert the user that an item was added to the cart
  const itemAdded = () => {
    alert("item was added");
  };
  return (
    <div>
      <h1 className="prodetails">Product Details</h1>
      <div className="horizontal">
        <img src={itemDisplay[0].picture} />
        <div className="vert">
          <h3>Product Title</h3>
          <p>{itemDisplay[0].title}</p>
          <h3>Price</h3>
          <p>{itemDisplay[0].price}</p>
          <h3>Description</h3>
          <p>{itemDisplay[0].description}</p>
        </div>
      </div>
      <button className="submitbutton" onClick={() => itemAdded()}>
        Add To Cart
      </button>
    </div>
  );
}

export default Description;
