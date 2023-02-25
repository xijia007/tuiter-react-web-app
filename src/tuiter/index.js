// import Nav from "../nav";
// import ExploreComponent from "./explore";
// import NavigationSidebar from "./navigation-sidebar";
// import PostSummaryList from "./post-summary-list";
// import PostSummaryItem from "./post-summary-list/post-summary-item";
// import WhoToFollowList from "./who-to-follow-list";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

// function Tuiter() {
//   return (
//     <div>
//       <Nav />
//       <NavigationSidebar active="home" />
//       <WhoToFollowListItem />
//       <WhoToFollowList />
//       <PostSummaryItem />
//       <PostSummaryList />
//       <ExploreComponent />
//       <h1>Tuiter</h1>
//     </div>
//   );
// }
// export default Tuiter;
import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";

function Tuiter() {
  return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <Routes>
          {/* <Route
            path="tuiter"
            element={<NavigationSidebar active="tuiter" />}
          /> */}
          <Route path="home" element={<NavigationSidebar active="home" />} />
          <Route
            path="explore"
            element={<NavigationSidebar active="explore" />}
          />
          <Route path="*" element={<NavigationSidebar active="explore" />} />
        </Routes>
      </div>
      <div
        className="col-10 col-md-10 col-lg-7 col-xl-6"
        style={{ position: "relative" }}
      >
        <Routes>
          <Route path="home" element={<HomeComponent />} />
          <Route path="explore" element={<ExploreComponent />} />
          <Route path="*" element={<ExploreComponent active="explore" />} />
        </Routes>
      </div>
      <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  );
}

export default Tuiter;
