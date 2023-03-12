

import axios from "axios";
const {  createSlice, createAsyncThunk, } =require( "@reduxjs/toolkit");



export const fetchCats=createAsyncThunk("allcats/fetchCats",async()=>{
    const res=await axios.get("https://cat-clicker-server-mohammadibrahim2.vercel.app/alldata")

    return res.data
})

const allCatSlice=createSlice({
    name:"allcats",
    initialState:{
        posts:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCats.fulfilled,(state,action)=>{
            state.posts=action.payload
        })
    }
})
export default allCatSlice.reducer;
