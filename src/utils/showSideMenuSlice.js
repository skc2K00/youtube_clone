import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowMenu : true,
};

export const showSideMenuSlice = createSlice({
    name : 'showSideMenu',
    initialState,
    reducers : {
        toggleSideMenu : (state,action) => {
            state.isShowMenu = !(state.isShowMenu)
        }
    }
}) 

export const {toggleSideMenu} = showSideMenuSlice.actions

export default showSideMenuSlice.reducer
