import { configureStore } from "@reduxjs/toolkit";
import navAppSlice from "./navAppSlice";
import searchSlice from "./searchSlice" ;
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";



const appStore = configureStore ({
    reducer: {
        app : navAppSlice,
        search : searchSlice,
        chat: chatSlice,
        video: videoSlice,
    },
});

export  default appStore;

