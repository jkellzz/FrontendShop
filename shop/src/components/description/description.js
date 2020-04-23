import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { deleteItem } from '../../services/api-helper'

function Description(props) {
  const [items, setItems] = useState([]);
  const [value, setValue] =useState()
  const itemDisplay = props.items.filter((item, key) => {
    return item._id === props.match.params.id;
  });

  function refreshPage(){ 
        window.location.reload(); 
    }

  const handleDelete = async(id) => {
        const json = await deleteItem(id)
        console.log('handleDelete - json', json)
          const itemsArr = items.filter( item => item._id !== id)
          setItems(itemsArr)
          refreshPage()
      }

      const handleChange = e => {
        setValue(e.target.value);
      };
      const reset = () => {
        setValue("");
      };
      
      const handleSubmit = e => {
        e.preventDefault();
        itemDisplay(value);
        reset();
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
          <h3>Reviews:</h3>
          <p>{itemDisplay[0].review[0].reviews}</p>
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
      <button className="editbutton">
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
