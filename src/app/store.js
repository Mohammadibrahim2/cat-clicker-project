import { configureStore } from "@reduxjs/toolkit";
import allcatsReducer from "../features/Cats/allcatsSlice";
import catsReducer  from "../features/Cats/CatsSlice";
import counterReducer from "../features/Counter/counterSlice";



const store=configureStore({
    reducer:{
        allcatsReducer:allcatsReducer,
        catReducer:catsReducer,
        counterReducer:counterReducer

    }
})
export default store