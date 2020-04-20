import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import './style.css'

const Search = () => {
  return (
    <MDBCol md="ok">
    <MDBFormInline className="md-form mr-auto mb-4">
      <input className="bar" type="text" placeholder="Search" aria-label="Search" />
      <MDBBtn type="submit" className="mr-auto">
        Search
      </MDBBtn>
      </MDBFormInline>
      </MDBCol>
  );
}

export default Search;