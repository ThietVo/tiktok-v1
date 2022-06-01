import { configureStore } from "@reduxjs/toolkit";
import sidebarUserListSlice from './sidebarUserListSlice';
import modalSlice from "./modalSlice";
import userLoginSlice from "./userLoginSlice";
import sidebarSlice from './sidebarSlice';
import uploadSlice from "./uploadSlice";
import videoDetailSlice from "./videoDetailSlice";
import commentSlice from "./commentSlice";
import likedVideosSlice from "./likedVideosSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
    reducer: {
        sidebarUserList: sidebarUserListSlice.reducer,
        modal: modalSlice.reducer,
        userLogin: userLoginSlice.reducer,
        sidebar: sidebarSlice.reducer,
        upload: uploadSlice.reducer,
        videoDetail: videoDetailSlice.reducer,
        comment: commentSlice.reducer,
        likedVideos: likedVideosSlice.reducer,
        videos: videosSlice.reducer
    },
});

export default store;