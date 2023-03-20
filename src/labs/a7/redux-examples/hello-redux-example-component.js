import React from "react";
import { useSelector } from "react-redux";

// const HelloReduxExampleComponent = () => {
//   const message = useSelector((hello) => hello.message);
//   return <h3>{message}</h3>;
// };

// export default HelloReduxExampleComponent;
const HelloReduxExampleComponent = () => {
  const message = useSelector((state) => state.hello.message);
  return <h1>{message}</h1>;
};
export default HelloReduxExampleComponent;
