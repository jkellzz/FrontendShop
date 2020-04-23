import React, { useEffect, useState } from "react";
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
import { getAllItems } from "../../services/api-helper";

const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllItems();
      setItems(resp);
      setIsLoading(false);
    };
    makeAPICall();
  }, []);

  const list = items.map((item, key) => {
    return (
      <MDBCard className="card" style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={item.img} waves />
        <MDBCardBody>
          <MDBCardTitle>{item.item}</MDBCardTitle>
          <MDBCardTitle>${item.price}</MDBCardTitle>
          <Link to={`/description/${item._id}`}>
            <MDBBtn className="moreinfo">More Info</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    );
  });
  
  return <MDBCol className="cardcontainer">{list}</MDBCol>;
};

export default Products;
