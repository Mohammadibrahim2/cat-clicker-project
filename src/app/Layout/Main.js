import React from "react";
import { Outlet } from "react-router-dom";
import CatGallery from "../../pages/CatGellary/CatGallery";
import LeftNav from "../../pages/LeftNav/LeftNav";
import Navbar from "../../pages/Navbar/Navbar";
import RightSide from "../../pages/RightSide/RightSide";



const Main=()=>{
return(
    <div className="w-[98%] mx-auto h-full " >
    <Navbar></Navbar>
      <div  className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-3 w-full h-full">
      {/* <LeftNav></LeftNav> */}
      <LeftNav></LeftNav>
     <Outlet></Outlet>
    <RightSide></RightSide>
      </div>
    <div className="w-full h-auto my-10">
      <CatGallery></CatGallery>
   
    </div>
      
    </div>
)
}
export default Main