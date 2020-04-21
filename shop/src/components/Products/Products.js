import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";

const Products = () => {
  const products = [
    {
      picture: "https://mdbootstrap.com/img/Photos/Others/images/43.jpg",
      title: "Product Title 3",
      price: "Price $$",
      description: "this is a product 3",
    },
    {
      picture: "https://mdbootstrap.com/img/Photos/Others/images/43.jpg",
      title: "Product Title 2",
      price: "Price $$",
      description: "this is a product 2 ",
    },
    {
      picture: "https://mdbootstrap.com/img/Photos/Others/images/43.jpg",
      title: "Product Title 1",
      price: "Price $$",
      description: "this is a product 1",
    },
  ];
  let list = products.map((item, key) => {
    return (
      <MDBCard className="card" style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={item.picture} waves />
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardTitle>{item.price}</MDBCardTitle>
          <Link to={`/description/${item.title}`}>
            <MDBBtn className="moreinfo">More Info</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    );
  });

  return <MDBCol className="cardcontainer">{list}</MDBCol>;
};

export default Products;
