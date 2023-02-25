import React from "react";
import postsArray from "./posts.json";
import { FaRetweet } from "react-icons/fa";
import PostItem from "./PostItem";

const PostList = () => {
  return (
    <ul className="list-group">
      {postsArray.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostList;
