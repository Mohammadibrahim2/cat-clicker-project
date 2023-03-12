import React, { useState } from "react";

import { useForm } from "react-hook-form";
import {
    Card,
    Input,
 
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import  {addCat}  from "../../features/Cats/CatsSlice";

const RightSide=()=>{
    const Singlecat=useSelector((state)=>state.catReducer.cat);

    console.log(Singlecat[1])
    
    const cat=Singlecat[1];


    const [toggle,setToggle]=useState(false)

    const {register,formState: { errors }, handleSubmit}=useForm()

    // const[singlephoto,setPhoto]=useState({})
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const handleCat=(data)=>{

        console.log(data)
        const image=data.photo[0]
        console.log(data.photo[0])
        const formData=new FormData()
        formData.append("image",image)
        const url="https://api.imgbb.com/1/upload?expiration=600&key=acbca0356cf868436c7c6a4a4783d467"
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imag=>{
            if(imag.success){
                console.log(imag.data.url)}
                const newcat={name:data?.name,nickName:data?.nickName,age:data?.age,ageCategory:data?.ageCategory,img:imag.data.url,id:cat?._id}
                console.log(newcat)
    
                fetch('https://cat-clicker-server-mohammadibrahim2.vercel.app/addcat',
                {method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newcat)

            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        
            
    
        
        })
    }

    return(
        <div>
             <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        New Cat
      </Typography>
     
      <div className="border-2">

    
      <Button className="py-2 px-2 bg-blue-500 text-white my-4  w-1/2" onClick={()=>setToggle(true)}>Open New form</Button>
      <div className={`${toggle?"block":"hidden"}`}>

     
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(handleCat)}>
      
                
         
            <Input type="text" {...register("name")} placeholder="name" defaultValue={cat?.name} className="px-3 py-2 w-full border-2 border-blue-700"/>
            <Input type="text" {...register("age")} placeholder="Age" defaultValue={cat?.age} className="px-3 py-2 w-full border-2 border-blue-700 my-2"/>
            <Input type="text" {...register("nickName")} placeholder="NickName" defaultValue={cat?.nickName
} className="px-3 py-2 w-full border-2 border-blue-700 my-2"/>
            
            <Input type="text" {...register("ageCategory",)} defaultValue={cat?.ageCategory} placeholder="Age-CAtegory" className="px-3 py-2 w-full border-2"/>
            
            
            
            
            <Input type="file" {...register("photo",)}  className=" my-2  px-3 py-2 w-full border-2 "/>
            
           
            <Button  type="submit" variant='contained' className="bg-green-600 text-white my-5 " >save</Button>
            <Button variant="contained" className="bg-red-600 text-white my-5 ml-2" onClick={()=>setToggle(false)}>
                    Undo
                </Button>
            
            <p>{data}</p>
            
   
      
      </form>
      </div>
      </div>
    </Card>

        </div>
    )
}

export default RightSide