import React from "react";
import "./style.css";


function Description(props) {
  const itemDisplay = props.products.filter((item, key) => {
    return item.title === props.match.params.item;
  });
  console.log("props", props);
  console.log("itemDisplay", itemDisplay);

  return (
    <div><h1 className='prodetails'>Product Details</h1>
    <div className='horizontal'>
      <img src={itemDisplay[0].picture} />
      <div className='vert'>
      <h3>Product Title</h3>
      <p>{itemDisplay[0].title}</p>
      <h3>Price</h3>
      <p>{itemDisplay[0].price}</p>
      <h3>Description</h3>
      <p>{itemDisplay[0].description}</p>
    </div>
    </div>
    <button className='submitbutton'>Add To Cart</button>
    </div>
  );
}

export default Description;
