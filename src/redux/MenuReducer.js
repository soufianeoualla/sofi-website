import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name:'menu',
    initialState:{
        state:false
    },
    reducers:{
        showMenu:(state)=>{
            state.state = true;
        },
        closeMenu:(state)=>{
            state.state =false
        }
    }

})

export const {closeMenu,showMenu}=menuSlice.actions

export default menuSlice.reducer