// import React from "react";
// import TuitsItem from "./TuitsItem";
// import { useSelector } from "react-redux";

// const TuitsList = () => {
//   const postsArray = useSelector((state) => state.tuits);
//   return (
//     <ul className="list-group">
//       {postsArray.map((post) => (
//         <TuitsItem key={post._id} post={post} />
//       ))}
//     </ul>
//   );
// };
// export default TuitsList;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitsItem from "./TuitsItem";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
  // const postsArray = useSelector((state) => state?.tuitsData?.tuits); //{ tuits:[], loading: false}
  // console.log(postsArray); tuits.tuits.[]

  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  const sortedTuits = [...tuits];
  sortedTuits.sort((a, b) => {
    return b._id - a._id;
  });

  console.log(sortedTuits);

  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}

      {sortedTuits.map((post) => (
        <TuitsItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default TuitsList;
