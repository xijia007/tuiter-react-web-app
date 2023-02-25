import React from "react";

function DisplayBigImage({ post }) {
  return post.bigImage ? (
    <div
      id="bigImage"
      style={{
        padding: "6px",
      }}
    >
      <img
        src={`../../images/${post.bigImage}`}
        style={{
          borderRadius: "10px",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  ) : null;
}

export default DisplayBigImage;
