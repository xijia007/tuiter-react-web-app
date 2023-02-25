import React from "react";

function DisplayShowThisThread({ post }) {
  return post.showThisThread ? (
    <a
      href="#"
      style={{
        fontSize: "13px",
        color: "rgb(100,180,255)",
        textDecoration: "none",
      }}
    >
      Show this thread
    </a>
  ) : null;
}

export default DisplayShowThisThread;
