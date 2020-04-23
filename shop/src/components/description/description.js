import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { deleteItem } from "../../services/api-helper";
// import { app } from '../../App'

function Description(props) {
  const [items, setItems] = useState([]);
  if (!props.items) {
    return <div></div>;
  }
  const itemDisplay = props.items.filter((item, key) => {
    return item._id === props.match.params.id;
  });

  const handleDelete = async (id) => {
    const json = await deleteItem(id);
    console.log("handleDelete - json", json);
    const itemsArr = items.filter((item) => item._id !== id);
    setItems(itemsArr);
    refreshPage();
    window.location.reload();
  };

  function refreshPage() {
    window.location.reload();
  }
  return (
    <div>
      <h1 className="prodetails">Product Details</h1>
      <div className="horizontal">
        <img src={itemDisplay[0].img} />
        <div className="vert">
          <h3>Product Title:</h3>
          <p>{itemDisplay[0].item}</p>
          <h3>Price:</h3>
          <p>${itemDisplay[0].price}</p>
          <h3>Description:</h3>
          <p>{itemDisplay[0].itemDescription}</p>
          <h3>Reviews:</h3>
          <p>{itemDisplay[0].review[0] ? itemDisplay[0].review[0].reviews : 'No reviews.'}</p>
        </div>
      </div>
      <Link to="/cart">
        <button
          className="submitbutton"
          onClick={() => props.handleAdd(itemDisplay[0])}
        >
          Add To Cart
        </button>
      </Link>
      <button onClick={refreshPage} className="editbutton">
        Edit Post
      </button>
      <Link to="/">
        <button
          onClick={() => handleDelete(itemDisplay[0]._id)}
          className="deletebutton"
        >
          Delete Post
        </button>
      </Link>
    </div>
  );
}
export default Description;
