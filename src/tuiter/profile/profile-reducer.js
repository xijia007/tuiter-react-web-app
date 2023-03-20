import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  userProfile: {
    userName: "Hello Kitty",
    tweetsNumber: "888K Tweets",
    handle: "@hellokitty",
    profilePicture: "hellokitty.png",
    bannerPicture: "hellokittyBanner.png",
    bio: "Hello Kitty also known by her real name Kitty White. According to her backstory, she lives in a London suburb with her family, and is close to her twin sister Mimmy, who is depicted with a yellow bow.",
    website: "https://en.wikipedia.org/wiki/Hello_Kitty",
    location: "London, England",
    dateOfBirth: "March 1th, 1975",
    dateJoined: "Feb 2012",
    followingCount: "88K",
    followersCount: "36K",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState: defaultState,
  reducers: {
    editProfile(state, action) {
      state.userProfile = { ...state.userProfile, ...action.payload };
      //   console.log(current(state));
    },
    updateDateOfBirth: (state, action) => {
      state.userProfile.dateOfBirth = action.payload;
    },
  },
});

export const { editProfile, updateDateOfBirth } = profileSlice.actions;
export default profileSlice.reducer;
