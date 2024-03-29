import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'modal',
    initialState: {
        showModalLogin: false,
        showModalUpload: false,
        showModalVideoDetail: false,
        showModalDeleteComment: false,
        showModalDeleteVideo: false,
        showModalEditProfile: false,
        showToastMessage: false,
        showModalSetPrivacy: false
    },
    reducers: {
        setModalLogin: (state, action) => {
            state.showModalLogin = action.payload
        },
        setModalUpload: (state, action) => {
            state.showModalUpload = action.payload
        },
        setModalVideoDetail: (state, action) => {
            state.showModalVideoDetail = action.payload
        },
        setModalDeleteComment: (state, action) => {
            state.showModalDeleteComment = action.payload
        },
        setModalDeleteVideo: (state, action) => {
            state.showModalDeleteVideo = action.payload
        },
        setModalEditProfile: (state, action) => {
            state.showModalEditProfile = action.payload
        },
        setToastMessage: (state, action) => {
            state.showToastMessage = action.payload
        },
        setModalSetPrivacy: (state, action) => {
            state.showModalSetPrivacy = action.payload;
        }
    }
})