import React from "react";
import TuitsItem from "./TuitsItem";
import { useSelector } from "react-redux";

const TuitsList = () => {
  const postsArray = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {postsArray.map((post) => (
        <TuitsItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default TuitsList;
