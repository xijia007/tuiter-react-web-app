import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { deleteTuit } from "./tuits-reducer";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import TuitStats from "./tuitsStats";

const TuitsItem = ({ post }) => {
  // const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  // const deleteTuitHandler = (id) => {
  //   dispatch(deleteTuit(id));
  // };

  return (
    <li className="list-group-item">
      <div>
        <div className="row">
          <div id="avaterImage" className="col-2">
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
                    {post.username ? post.username : null}
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
            <TuitStats id={post._id} post={post} />
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitsItem;
