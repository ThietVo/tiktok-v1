import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersApi } from '../callApi/usersApi';

export const getUsers = createAsyncThunk('users/getUsers', async() => {
    return getUsersApi();
})

export default createSlice({
    name: 'sidebarUserList',
    initialState: {
        showSidebarUserList: true,
        userList: [],
        status: null
    },
    reducers: {
        setShowSidebarUserList: (state, action) => {
            state.showSidebarUserList = action.payload;
        },
        setUserList: (state, action) => {
            state.userList = action.payload;
        }
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.status = 'loading'
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'success'
            state.userList = action.payload
        },
        [getUsers.rejected]: (state) => {
            state.status = 'failed'
        }
    }
}) 