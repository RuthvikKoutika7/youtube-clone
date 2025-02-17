import { createSlice } from "@reduxjs/toolkit";

const navAppSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,

    },
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu : (state)=>{
            state.isMenuOpen =false ;
        }
        
    }

});

export default navAppSlice.reducer;
export const {toggleMenu, closeMenu} = navAppSlice.actions;