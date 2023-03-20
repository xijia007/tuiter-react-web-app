import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitsItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div>
        <div className="row">
          <div id="avaterImage" className="col-auto">
            <img
              width={50}
              className="float-end rounded-circle"
              src={`../../images/${post.image ? post.image : null}`}
              alt="avater"
              // style={{ borderRadius: "50%", width: "40px", height: "40px" }}
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
                    {post.userName ? post.userName : null}
                  </span>
                  <FaCheckCircle
                    style={{ color: "rgb(100,180,255)", margin: "0 2px 0 0" }}
                  />
                  <span style={{ fontSize: "13px", color: "gray" }}>
                    {post.handle ? post.handle : null}
                  </span>
                  <span style={{ fontSize: "13px", color: "gray" }}> · </span>
                  <span style={{ fontSize: "13px", color: "gray" }}>
                    {post.time ? post.time : null}
                  </span>
                </div>
              </div>
              <div className="col-1">
                <i
                  className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(post._id)}
                ></i>
              </div>
            </div>
            <div id="title">
              <span style={{ fontSize: "13px" }}>
                {post.tuit ? post.tuit : null}
              </span>
            </div>

            <div id="replyLikeBox">
              <div className="d-flex justify-content-start">
                <div
                  id="reply"
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
                    {post.replies ? post.replies : null}
                  </span>
                </div>
                <div
                  id="retweet"
                  style={{
                    margin: "0 50px 0 0",
                    fontSize: "13px",
                    color: "gray",
                    padding: "5px 0 3px 3px",
                  }}
                >
                  {/* <span
                    style={{
                      padding: "0 12px 0 0",
                    }}
                  >
                    {post.retweetNumber ? <FaRetweet /> : null}
                  </span> */}
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
                      class="bi bi-repeat"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                    </svg>
                  </span>
                  <span
                    style={{
                      padding: "0 15px 0 0",
                    }}
                  >
                    {post.retuits ? post.retuits : null}
                  </span>
                </div>
                <div
                  id="like"
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
                    {post.liked === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    ) : (
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
                    )}
                  </span>

                  <span
                    style={{
                      padding: "0 15px 0 0",
                    }}
                  >
                    {post.likes ? post.likes : null}
                  </span>
                </div>
                <div
                  id="upload"
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
                      class="bi bi-share"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
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
                {/* <DisplayShowThisThread post={post} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitsItem;
