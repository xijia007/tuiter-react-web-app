import React from "react";
// import postsArray from "./posts.json";
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
  // const postsArray = useSelector((state) => state.tuits);
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const sortedTuits = [...tuits];
  sortedTuits.sort((a, b) => {
    return b._id - a._id;
  });
  return (
    <ul className="list-group">
      {sortedTuits.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
