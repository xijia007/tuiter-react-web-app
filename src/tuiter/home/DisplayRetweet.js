import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function DisplayRetweet({ post }) {
  return post.retweetedAvatarImage ? (
    <div
      className="container"
      id="retweet"
      style={{
        border: "1px solid var(--bs-list-group-border-color)",
        margin: "10px 0 10px 0",
        borderRadius: "10px",
        padding: "6px",
      }}
    >
      <div style={{ margin: "0 0 0 6px" }}>
        <div>
          <img
            src={`../../images/${
              post.retweetedAvatarImage ? post.retweetedAvatarImage : null
            }`}
            style={{ borderRadius: "50%", width: "20px", height: "20px" }}
          />
          <span
            style={{
              fontSize: "13px",
              margin: "10px 2px 0 0",
              fontWeight: "bold",
            }}
          >
            {post.retweetedId ? post.retweetedId : null}
          </span>
          <FaCheckCircle
            style={{ color: "rgb(100,180,255)", margin: "0 2px 0 0" }}
          />
          <span style={{ fontSize: "13px", color: "gray" }}>
            @{post.retweetedHandle ? post.retweetedHandle : null}
          </span>
          <span style={{ fontSize: "13px", color: "gray" }}> · </span>
          <span style={{ fontSize: "13px", color: "gray" }}>
            {post.retweetedTime ? post.retweetedTime : null}
          </span>
        </div>
        <div id="retweetedContent">
          {" "}
          <span style={{ fontSize: "13px" }}>
            {post.retweetedContent ? post.retweetedContent : null}
          </span>
          <span>{post.retweetedContent ? <FaArrowRight /> : null}</span>
          <span style={{ fontSize: "13px" }}>
            {post.retweetedLink ? post.retweetedLink : null}
          </span>
        </div>
      </div>
    </div>
  ) : null;
}

export default DisplayRetweet;
