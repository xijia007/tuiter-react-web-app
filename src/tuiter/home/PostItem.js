import React from "react";
import { FaRetweet } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import DisplayBigImage from "./DisplayBigImage";
import DisplayRetweet from "./DisplayRetweet";
import DisplayShowThisThread from "./DisplayShowThisThread";
import postsArray from "./posts.json";
const PostItem = ({ post }) => {
  return (
    <li className="list-group-item">
      <div>
        <div
          style={{
            fontSize: "11px",
            color: "rgb(100,100,100)",
            fontWeight: "bold",
          }}
        >
          <span style={{ margin: "0 20px 0 45px" }}>
            {post.retweeted ? <FaRetweet /> : null}
          </span>
          <span>{post.retweeted ? post.retweeted : null}</span>
        </div>
        <div className="row">
          <div id="avater" className="col-2" style={{ textAlign: "right" }}>
            <img
              src={`../../images/${post.avatarImage ? post.avatarImage : null}`}
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            />
          </div>
          <div id="main" className="col-10">
            <div className="row">
              <div className="col-11">
                <div id="username">
                  <span
                    style={{
                      fontSize: "13px",
                      margin: "10px 2px 0 0",
                      fontWeight: "bold",
                    }}
                  >
                    {post._id ? post._id : null}
                  </span>
                  <FaCheckCircle
                    style={{ color: "rgb(100,180,255)", margin: "0 2px 0 0" }}
                  />
                  <span style={{ fontSize: "13px", color: "gray" }}>
                    @{post.handle ? post.handle : null}
                  </span>
                  <span style={{ fontSize: "13px", color: "gray" }}> · </span>
                  <span style={{ fontSize: "13px", color: "gray" }}>
                    {post.time ? post.time : null}
                  </span>
                </div>
              </div>
              <div className="col-1">
                <strong>...</strong>
              </div>
            </div>
            <div id="postContent">
              <span style={{ fontSize: "13px" }}>
                {post.postContent ? post.postContent : null}
              </span>
              <span>{post.postLink ? <FaArrowRight /> : null}</span>
              <a
                href="https://www.spacex.com/updates"
                style={{
                  fontSize: "13px",
                  color: "rgb(100,180,255)",
                  textDecoration: "none",
                }}
              >
                {post.postLink ? post.postLink : null}
              </a>
            </div>
            <DisplayBigImage post={post} />
            <DisplayRetweet post={post} />

            <div id="replyLike">
              <div className="d-flex justify-content-start">
                <div
                  style={{
                    margin: "0 50px 0 0",
                    fontSize: "13px",
                    color: "gray",
                    padding: "5px 0 3px 3px",
                  }}
                >
                  <span
                    style={{
                      padding: "0 12px 0 0",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-chat"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    </svg>
                  </span>

                  <span
                    style={{
                      padding: "0 15px 0 0",
                    }}
                  >
                    {post.replyNumber ? post.replyNumber : null}
                  </span>
                </div>
                <div
                  style={{
                    margin: "0 50px 0 0",
                    fontSize: "13px",
                    color: "gray",
                    padding: "5px 0 3px 3px",
                  }}
                >
                  <span
                    style={{
                      padding: "0 12px 0 0",
                    }}
                  >
                    {post.retweetNumber ? <FaRetweet /> : null}
                  </span>

                  <span
                    style={{
                      padding: "0 15px 0 0",
                    }}
                  >
                    {post.retweetNumber ? post.retweetNumber : null}
                  </span>
                </div>
                <div
                  style={{
                    margin: "0 50px 0 0",
                    fontSize: "13px",
                    color: "gray",
                    padding: "5px 0 3px 3px",
                  }}
                >
                  <span
                    style={{
                      padding: "0 12px 0 0",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </span>

                  <span
                    style={{
                      padding: "0 15px 0 0",
                    }}
                  >
                    {post.likeNumber ? post.likeNumber : null}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "gray",
                    padding: "5px 0 3px 3px",
                  }}
                >
                  <span
                    style={{
                      padding: "0 12px 0 0",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-upload"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  padding: "8px 0 8px 0",
                }}
              >
                <DisplayShowThisThread post={post} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default PostItem;
