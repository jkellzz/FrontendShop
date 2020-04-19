import React from "react";

function Upload() {
  return (
    <div>
      <h1>This is upload</h1>
      <input type="text" placeholder="Upload your product" />
      <input type="text" placeholder="Price" />
      <input type="text" placeholder="Description" />
      <input type="file" />
      <button>Submit</button>
    </div>
  );
}

export default Upload;
