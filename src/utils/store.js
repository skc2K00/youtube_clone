import { configureStore } from "@reduxjs/toolkit";
import showSideMenuReducer from './showSideMenuSlice'


export const store = configureStore({
    reducer : {
        showSideMenu : showSideMenuReducer,
    },

})