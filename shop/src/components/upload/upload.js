import React from "react";
import './style.css'

function Upload() {
  return (
    <div>
      <h1>Sell your Product</h1>
      <br></br>
      <h5>Please upload your product images...</h5>
      <input type="file" />
      <br></br>
      <input className='sell' type="text" placeholder="What is your product?" />
      <br></br>
      <input className='sell' type="text" placeholder="Price" />
      <br></br>
      <h5>Is your product...</h5>
      <form className='radbut'>
        <select className="Condition" name="Condition">
              <option value="New">New</option>       
              <option value="Mint Condition">Mint Condition</option>
              <option value="Used">Used</option>
        </select>
      </form>

      <br></br>
      <input className='sell' type="text" placeholder="Product Description" />
      <br></br>
      <button className="submitbutton">Submit</button>
    </div>
  );
}

export default Upload;
