import React from "react";

function Description(props) {
  const descriptions = props.products.map((item, key) => {
    return (
      <div key={key}>
        <p> {item.description}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>This is a Description</h1>
      {descriptions}
    </div>
  );
}

export default Description;
