import { createSelector } from "@reduxjs/toolkit";

export const sidebarUserListSelector = (state) => state.sidebarUserList;

export const modalSelector = (state) => state.modal;

export const userLoginSelector = (state) => state.userLogin;

export const sidebarSelector = (state) => state.sidebar;

export const uploadSelector = (state) => state.upload;

export const videoDetailSelector = (state) => state.videoDetail;

export const commentSelector = (state) => state.comment;

export const likedVideosSelector = (state) => state.likedVideos;

export const videosSelector = (state) => state.videos;
