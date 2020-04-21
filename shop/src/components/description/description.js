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
      <h1>This is a Description</h1>
      {itemDisplay[0].description}
    </div>
  );
}

export default Description;
