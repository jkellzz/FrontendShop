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
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState("");

  console.log('Products - items', items)

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllItems();
      setItems(resp);
      setIsLoading(false);
      setFiltered(resp);
    };
    makeAPICall();
  }, []);

  useEffect(() => {
    const searchResult = filtered.filter((results) =>
      results.item.toLowerCase().includes(result.toLowerCase())
    );
    setItems(searchResult);
  }, [result]);

  const onChange = (e) => {
    setResult(e.target.value);
  };

  const list = items.map((item, key) => {
    return (
      <MDBCard className="card" style={{ width: "22rem" }} key={key}>
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

  return (
    <div>
      <div>
        <input
          className="searchform"
          type="text"
          placeholder="Search here..."
          value={result}
          onChange={onChange}
        />
        <MDBCol className="cardcontainer">{list}</MDBCol>
      </div>
    </div>
  );
};

export default Products;
