import React from "react";
import "./style.css";

function Description(props) {
  const itemDisplay = props.products.filter((item, key) => {
    return item.title === props.match.params.item;
  });
  console.log("props", props);
  console.log("itemDisplay", itemDisplay);
  return (
    <div>
      <h1>{itemDisplay[0].title}</h1>
      <img src={itemDisplay[0].picture} />
      <p>{itemDisplay[0].description}</p>
      <p>{itemDisplay[0].price}</p>
    </div>
  );
}

export default Description;
