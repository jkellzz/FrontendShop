import React from "react";
import "./style.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
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
  let list = products.map((item, key) => {
    return (
      <MDBCard className="card" style={{ width: "22rem" }} key={key}>
        <MDBCardImage className="img-fluid" src={item.picture} waves />
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardTitle>{item.price}</MDBCardTitle>
          <Link to={`/description/${key}`}>
            <MDBBtn>More Info</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    );
  });

  return (
    <MDBCol className="cardcontainer">
      <div>{list}</div>
    </MDBCol>
  );
};

export default Products;
