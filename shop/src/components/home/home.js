import React from "react";
import "./style.css";
import Products from "../Products/Products";

function Home(props) {
  // console.log("props-Home", props);
  return (
    <div>
      <h1 className="title">
        Your next purchase is a{" "}
        <img
          className="tiny"
          src="https://res.cloudinary.com/dtzbye6dy/image/upload/v1587394891/Screen_Shot_2020-04-20_at_11.00.30_AM_wnfrsi.png"
        />{" "}
        away...
      </h1>
      <Products />
    </div>
  );
}

export default Home;
