import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCats } from "./allcatsSlice";


const initialCats={ 
cats:[
    
],
cat:[ {id:1,name:"RagDoll",age:15, ageCategory :"Young",nickName:"Leo",img:"https://i.ibb.co/sRLFJQw/cat7.jpg"},]

}


export const catsSlice=createSlice({
    name:"cats",
    initialState:initialCats,
    reducers:{
        
        showCats:(state,action)=>{
        state.cats=action.payload
        },
        addCat:(state,action)=>{
            state.cats.push(action.payload)
        },
        singleCat:(state,action)=>{
            const id=action.payload
            const singlecat=state.cats.find((cat)=>cat._id===id)
            state.cat[1]=singlecat
        }
    }
})

export const{showCats,addCat,singleCat}=catsSlice.actions;

export default catsSlice.reducer;