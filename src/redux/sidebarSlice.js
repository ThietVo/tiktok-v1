import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'sidebar',
    initialState: {
        showSidebar: true,
        classContainer: true
    },
    reducers: {
        setShowSidebar: (state, action) => {
            state.showSidebar = action.payload;
        },
        setClassContainer: (state, action) => {
            state.classContainer = action.payload;
        }
    }
}) 