import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      picture: "https://mdbootstrap.com/img/Photos/Others/images/43.jpg",
      title: "Product Title",
      price: "Price $$",
      description: "this is a product",
    },
    {
      picture: "https://mdbootstrap.com/img/Photos/Others/images/43.jpg",
      title: "Product Title",
      price: "Price $$",
      description: "this is a product",
    },
    {
      picture: "https://mdbootstrap.com/img/Photos/Others/images/43.jpg",
      title: "Product Title",
      price: "Price $$",
      description: "this is a product",
    },
  ];
  let list = products.map((item) => {
    return (
      <div>
        <img src={item.picture} />
        <h1>{item.title}</h1>
        <p>{item.price}</p>
        <button className='moreinfo'><Link to={`/description/${item.description}`}>More Info</Link></button>
      </div>
    );
  });

  return (
    <div className='cardcontainer'>
    <div>{list}</div>
    </div>
  );
};

export default Products;
