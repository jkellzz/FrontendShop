import React, { useState } from "react";
import "./style.css";


function Description(props) {
  // const itemDisplay = props.products.filter((item, key) => {
  //   return item.title === props.match.params.item;
  // });
  if (!props.items) {
    return <></>;
  }
  const itemDisplay = props.items.filter((item, key) => {
    return item._id === props.match.params.id;
  });

  const itemAdded = () => {
    alert("item was added");
  };
  return (
    <div>
      <h1 className="prodetails">Product Details</h1>
      <div className="horizontal">
        <img src={itemDisplay[0].img} />
        <div className="vert">
          <h3>Product Title</h3>
          <p>{itemDisplay[0].item}</p>
          <h3>Price</h3>
          <p>${itemDisplay[0].price}</p>
          <h3>Description</h3>
          <p>{itemDisplay[0].itemDescription}</p>
        </div>
      </div>
      <button className="submitbutton" onClick={() => itemAdded()}>
        Add To Cart
      </button>
    </div>
  );
}

export default Description;
