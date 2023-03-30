import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import { Provider } from "react-redux";
import PostSummaryList from "./post-summary-list";
import profileReducer from "./profile/profile-reducer";
import ProfileEditComponent from "./profile/profile-edit";
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitsData: tuitsReducer,
    profile: profileReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <Routes>
            <Route path="home" element={<NavigationSidebar active="home" />} />
            <Route
              path="explore"
              element={<NavigationSidebar active="explore" />}
            />
            <Route
              path="profile"
              element={<NavigationSidebar active="profile" />}
            />
            {/* <Route
              path="profile-edit"
              element={<NavigationSidebar active="profile" />}
            /> */}
            <Route path="*" element={<NavigationSidebar active="home" />} />
          </Routes>
        </div>
        <div
          className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{ position: "relative" }}
        >
          <Routes>
            <Route path="home" element={<HomeComponent />} />
            <Route path="explore" element={<ExploreComponent />} />
            <Route path="profile" element={<ProfileComponent />} />
            <Route path="profile-edit" element={<ProfileEditComponent />} />
            <Route path="*" element={<HomeComponent />} />
          </Routes>
        </div>
        <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <Routes>
            <Route path="home" element={<PostSummaryList />} />
            <Route path="explore" element={<WhoToFollowList />} />
            <Route path="profile" element={<WhoToFollowList />} />
            <Route path="*" element={<WhoToFollowList />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
