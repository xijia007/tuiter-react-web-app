import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteTuit } from "./tuits-reducer";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router";

const ProfileItem = () => {
  const profile = useSelector((state) => state.profile.userProfile);
  // console.log(profile);
  //   const dispatch = useDispatch();
  //   const deleteTuitHandler = (id) => {
  //     dispatch(deleteTuit(id));
  //   };
  // const { pathname } = useLocation();
  // const paths = pathname.split("/");
  // const active = paths[2];

  return (
    <div>
      <div id="userName" className="row">
        <div className="col-1">
          <div style={{ padding: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
        </div>
        <div className="col-11">
          <div className="row" style={{ fontWeight: "bold", fontSize: "18px" }}>
            <span>{profile?.userName}</span>
          </div>
          <div
            className="row"
            style={{ color: "rgb(110, 118, 125)", fontSize: "13px" }}
          >
            <span>{profile?.tweetsNumber}</span>
          </div>
        </div>
      </div>
      <div id="bannerPicture" className="position-relative">
        <img
          width="100%"
          // className="float-end rounded-circle"
          src={`../../images/${profile?.bannerPicture}`}
          alt="avater"
        />

        <img
          width={120}
          alt="avater"
          className="float-end rounded-circle position-absolute"
          style={{ bottom: "-45px", left: "20px" }}
          src={`/images/${profile.profilePicture}`}
        />
      </div>
      <div className="row float-end" style={{ margin: "10px 15px 0 10px" }}>
        <Link
          to="/tuiter/profile-edit"
          className={`list-group-item`}
          // className={`list-group-item active`}
        >
          <button
            className="btn rounded-5"
            style={{
              borderColor: "lightgray",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </button>
        </Link>
      </div>
      <div style={{ marginTop: "80px", marginLeft: "15px" }}>
        <div>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            {profile?.userName}
          </span>
        </div>
        <div>
          <span
            style={{
              fontSize: "13px",
              color: "rgb(110, 118, 125)",
            }}
          >
            {profile?.handle}
          </span>
        </div>
      </div>
      <div style={{ marginTop: "10px", marginLeft: "15px" }}>
        <div>
          <span style={{ fontSize: "13px" }}>{profile?.bio}</span>
        </div>
      </div>
      <div
        id="location"
        className="d-flex justify-content-star"
        style={{
          marginTop: "20px",
          marginLeft: "15px",
          margin: "10px 50px 0 15px",
          color: "rgb(110, 118, 125)",
        }}
      >
        <div style={{ margin: "0 20px 0 0" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
            style={{ margin: "0 3px 0 0" }}
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <span
            style={{
              fontSize: "13px",
              // fontWeight: "lighter"
            }}
          >
            {profile?.location}
          </span>
        </div>
        <div style={{ margin: "0 20px 0 0" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-balloon"
            viewBox="0 0 16 16"
            style={{ margin: "0 3px 0 0" }}
          >
            <path
              fill-rule="evenodd"
              d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z"
            />
          </svg>
          <span style={{ fontSize: "13px" }}>Born {profile?.dateOfBirth}</span>
        </div>
        <div style={{ margin: "0 20px 0 0" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar3"
            viewBox="0 0 16 16"
            style={{ margin: "0 3px 0 0" }}
          >
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>

          <span style={{ fontSize: "13px" }}>Join {profile?.dateJoined}</span>
        </div>
      </div>
      <div id="website" style={{ margin: "10px 0 0 15px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(110, 118, 125)"
          class="bi bi-browser-chrome"
          viewBox="0 0 16 16"
          style={{ margin: "0 5px 0 0" }}
        >
          <path
            fill-rule="evenodd"
            d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
        <a
          href={profile?.website}
          style={{
            fontSize: "13px",
            textDecoration: "none",
            color: "rgb(110, 118, 125)",
          }}
        >
          {profile?.website}
        </a>
      </div>
      <div
        id="followings"
        className="d-flex justify-content-star"
        style={{
          marginTop: "20px",
          marginLeft: "15px",
          margin: "10px 50px 0 15px",
        }}
      >
        <div style={{ margin: "0 20px 0 0" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              margin: "0 5px 0 0",
            }}
          >
            {profile?.followingCount}
          </span>
          <span style={{ fontSize: "13px", color: "rgb(110, 118, 125)" }}>
            Following
          </span>
        </div>
        <div style={{ margin: "0 20px 0 0" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              margin: "0 5px 0 0",
            }}
          >
            {profile?.followersCount}
          </span>
          <span style={{ fontSize: "13px", color: "rgb(110, 118, 125)" }}>
            Followers
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProfileItem;
