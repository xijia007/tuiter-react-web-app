import React from "react";
import "./index.css";
// import PostList from "./PostList";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <>
      {/* <PostList /> */}
      <h2>Home</h2>
      <WhatsHappening />
      <TuitsList />
    </>
  );
};
export default HomeComponent;
