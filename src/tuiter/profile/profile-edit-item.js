import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, updateDateOfBirth } from "./profile-reducer";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { deleteTuit } from "./tuits-reducer";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router";
import "./index.css";

const ProfileEditItem = () => {
  const profile = useSelector((state) => state.profile.userProfile);

  const dispatch = useDispatch();

  const [userName, setUserName] = useState(profile?.userName);
  const [bio, setBio] = useState(profile?.bio);
  const [location, setLocation] = useState(profile?.location);
  const [website, setWebsite] = useState(profile?.website);
  const [dateOfBirth, setDateOfBirth] = useState(profile?.dateOfBirth);
  const [editDateOfBirthMode, setEditDateOfBirthMode] = useState(false);
  //   const [selectedDate, setSelectedDate] = useState(null);
  //   const history = useHistory();
  const handleSaveSubmit = (event) => {
    event.preventDefault();
    const newValue = {
      userName,
      bio,
      location,
      website,
      dateOfBirth,
    };

    dispatch(editProfile(newValue));
    // history.push("/tuiter/profile");
    // setInputValue(newValue);
  };

  const handleDateOfBirth = (event) => {
    dispatch(updateDateOfBirth(profile));
  };

  //   const handleDateOfBirth = (event) => {
  //     event.preventDefault();
  //     const newValue = {
  //       dateOfBirth,
  //     };
  //     dispatch(editProfile(newValue));
  //   };

  return (
    // <div>
    //   <Link to="/tuiter/profile">
    //     <button
    //       className="btn"
    //       style={{ fontSize: "15px" }}
    //       onClick={handleDateOfBirth}
    //     >
    //       Save
    //     </button>
    //   </Link>
    // </div>

    <div>
      {/* <form onSubmit={handleSaveSubmit}> */}
      <div id="top" className="d-flex justify-content-between">
        <div className="d-flex justify-content-between">
          <div
            id="Xbuttion"
            to="/tuiter/profile"
            style={{ marginRight: "20px" }}
          >
            {/* <a href="/tuiter/profile"> */}
            <Link to="/tuiter/profile">
              <button
                className="btn"
                style={{
                  fontSize: "15px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </Link>
          </div>
          <div
            style={{
              marginTop: "8px",
              //   marginRight: "300px"
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              <span>Edit Profile</span>
            </div>
          </div>
        </div>
        <div>
          <Link to="/tuiter/profile">
            <button
              //   onChange={handleChange}
              onClick={handleSaveSubmit}
              type="submit"
              className="btn rounded-5"
              style={{
                fontSize: "15px",
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
            >
              Save
            </button>
          </Link>
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
      <div id="name" style={{ margin: "70px 0 0 0" }}>
        <div class="full-input rounded-3" style={{ width: " 100%" }}>
          <label
            for="name"
            style={{
              color: "rgb(110, 118, 125)",
              fontSize: "15px",
              margin: "0 0 0 5px",
            }}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            style={{ fontSize: "15px", margin: "0 0 0 5px" }}
          ></input>
        </div>
      </div>
      <div id="bio" style={{ margin: "25px 0 0 0" }}>
        <div class="full-input rounded-3" style={{ width: " 100%" }}>
          <label
            for="bio"
            style={{
              color: "rgb(110, 118, 125)",
              fontSize: "15px",
              margin: "0 0 0 5px",
            }}
          >
            Bio
          </label>
          <textarea
            name="bio"
            //   value={profile?.bio}
            value={bio}
            onChange={(event) => setBio(event.target.value)}
            style={{
              fontSize: "15px",
              margin: "0 0 0 5px",
              width: "99%",
              minHeight: "100px",
              maxHeight: "500px",
              overflowY: "hidden",
              border: "none",
            }}
          ></textarea>
        </div>
      </div>
      <div id="location" style={{ margin: "25px 0 0 0" }}>
        <div class="full-input rounded-3" style={{ width: " 100%" }}>
          <label
            for="location"
            style={{
              color: "rgb(110, 118, 125)",
              fontSize: "15px",
              margin: "0 0 0 5px",
            }}
          >
            location
          </label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            //   value={profile?.location}
            style={{ fontSize: "15px", margin: "0 0 0 5px" }}
          ></input>
        </div>
      </div>
      <div id="website" style={{ margin: "25px 0 0 0" }}>
        <div
          class="full-input rounded-3"
          style={{ width: " 100%", height: "50px" }}
        >
          <input
            type="text"
            // onChange={handleChange}
            name="website"
            onChange={(event) => setWebsite(event.target.value)}
            placeholder="Website"
            style={{ fontSize: "15px", margin: "12px 0 0 5px" }}
          ></input>
        </div>
      </div>
      <div id="birthdate" style={{ margin: "25px 0 0 0", fontSize: "15px" }}>
        <span style={{ color: "rgb(110, 118, 125)" }}>Birth date · </span>
        {!editDateOfBirthMode && (
          <>
            <button
              style={{ color: "blue", border: "none", background: "none" }}
              onClick={() => {
                setEditDateOfBirthMode(true);
              }}
              // onClick={handleDateOfBirth}
              // onSubmit={handleDateOfBirth}
            >
              Edit
            </button>
            <div>
              <span style={{ fontSize: "17px", margin: "5px 0 0 0" }}>
                {profile?.dateOfBirth}
              </span>
            </div>
          </>
        )}
        {editDateOfBirthMode && (
          <>
            <button
              style={{ color: "blue", border: "none", background: "none" }}
              onClick={() => {
                setEditDateOfBirthMode(false);
              }}
              // onClick={handleDateOfBirth}
              // onSubmit={handleDateOfBirth}
            >
              Cancel
            </button>
            <div>
              <span
                style={{
                  fontSize: "15px",
                  margin: "5px 0 0 0",
                  color: "rgb(110, 118, 125)",
                }}
              >
                Edit the date of birth in the following format: MM DD, YYYY
              </span>

              <input
                type="text"
                name="DOB"
                value={dateOfBirth}
                onChange={(event) => setDateOfBirth(event.target.value)}
                //   onClick={handleDateOfBirth}
                style={{ fontSize: "15px", margin: "0 0 0 5px" }}
              ></input>
            </div>
          </>
        )}

        {/* <input
            style={{ fontSize: "17px", margin: "5px 0 0 0" }}
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          /> */}
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ margin: "25px 0 0 0", fontSize: "18px" }}
      >
        <div>Switch to professional</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};
export default ProfileEditItem;
