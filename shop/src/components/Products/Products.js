import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './style.css'

const Products = () => {
  return (
    <MDBCol className='cardcontainer'>
      <MDBCard className='card' style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Product Title</MDBCardTitle>
          <MDBCardTitle>Price $$</MDBCardTitle>
          <MDBBtn href="#">More Info</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className='card' style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Product Title</MDBCardTitle>
          <MDBCardTitle>Price $$</MDBCardTitle>
          <MDBBtn href="#">More Info</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className='card' style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Product Title</MDBCardTitle>
          <MDBCardTitle>Price $$</MDBCardTitle>
          <MDBBtn href="#">More Info</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className='card' style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Product Title</MDBCardTitle>
          <MDBCardTitle>Price $$</MDBCardTitle>
          <MDBBtn href="#">More Info</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    
  )
}

export default Products;