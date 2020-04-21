import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
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
      <MDBCol className="cardcontainer">
        <MDBCard className="card" style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src={item.picture} waves />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle>{item.price}</MDBCardTitle>
            <Link to={`/description/${item.description}`}>
              <MDBBtn>More Info</MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  });

  return <div>{list}</div>;
};

export default Products;
