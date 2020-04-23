import React, { useState } from "react";
import "./style.css";
import { deleteItem } from "../../services/api-helper"
import { Link } from "react-router-dom";

function Description(props) {
  const [items, setItems] = useState([])

  if (!props.items) {
    return <></>;
  }


function Description(props) {
  const itemDisplay = props.items.filter((item, key) => {
    return item._id === props.match.params.id;
  });

  

  const handleDelete = async(id) => {
    const json = await deleteItem(id)
    console.log('handleDelete - json', json)
    if(json.status == 'success'){
      const itemsArr = items.filter( item => item._id !== id)
      setItems(itemsArr)
    }
  }

  const itemAdded = () => {
  let [cart, setCart] = useState();

  const addToCart = () => {
    alert("item was added");
    setCart = itemDisplay[0].itemDescription;
    console.log("cart", cart);
  };

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
          <h3>Reviews</h3>
          <p>{itemDisplay[0].review[0].reviews}</p>
        </div>
      </div>

      <Link to="/cart">
        <button className="submitbutton" onClick={() => addToCart()}>
          Add To Cart
        </button>
      </Link>
      <button className="editbutton">Edit Post</button>
      <button className="deletebutton">Delete Post</button>
    </div>
  );
}

export default Description;
