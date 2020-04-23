import React, {useState} from "react";
import "./style.css";
import {createItem} from '../../services/api-helper'
import {Link} from 'react-router-dom'

function Upload() {
  const [itemName, setItemName] = useState('')
  const [imgURL, setImgUrl] = useState('')
  const [price, setPrice] = useState()
  const [condition, setCondition] = useState('New')
  const [description, setDescription] = useState('')

  const handleImgChange = e => {
    setImgUrl(e.target.value)
  }

  const handleItemChange = e => {
    setItemName(e.target.value)
  }

  const handlePriceChange = e => {
    setPrice(e.target.value)
  }

  const handleConditonChange = e => {
    setCondition(e.target.value)
  }

  const handleDescriptionChange = e => {
    setDescription(e.target.value)
  }

  const handleCreate = async(e) => {
    e.preventDefault()
    const json = await createItem({
      "item": itemName,
      "img": imgURL,
      "price": price,
      "condition": condition,
      "itemDescription": description
    })
    setItemName('')
    setImgUrl('')
    setPrice('')
    setDescription('')
  }

  return (
    <div>
      <h1>Sell your Product</h1>
      <br></br>
      <h5>Please upload your product images...</h5>
      <form onSubmit={handleCreate}>
      <input 
        className="sell" 
        type="text" 
        placeholder="URL to product Image"
        onChange={handleImgChange}
        value={imgURL}
      />
      <br></br>
      <input 
        className="sell" 
        type="text" 
        placeholder="What is your product?"
        onChange={handleItemChange}
        value={itemName}
      />
      <br></br>
      <input 
        className="sell" 
        type="text" 
        placeholder="Price"
        onChange={handlePriceChange}
        value={price}
      />
      <br></br>
      <h5>Is your product...</h5>

        <select 
          className="Condition" 
          name="Condition"
          onChange={handleConditonChange}
          value={condition}
        >
          <option value="New">New</option>
          <option value="Mint Condition">Mint Condition</option>
          <option value="Used">Used</option>
        </select>
    
      <br></br>
      <input 
        className="sell" 
        type="text" 
        placeholder="Product Description"
        onChange={handleDescriptionChange}
        value={description}
      />
      <br></br>
        <button className="submitbutton">Submit</button>
      </form>
    </div>
  );
}

export default Upload;
