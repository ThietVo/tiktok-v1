import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'videoDetail',
    initialState: {
        user: {},
        video: {}
    },
    reducers: {
        setVideoDetail: (state, action) => {
            state.user = action.payload.user;
            state.video = action.payload.video;
        }
    }
})