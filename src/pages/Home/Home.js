import React from "react";
import { useSelector } from "react-redux";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";


const Home =()=>{
const Singlecat=useSelector((state)=>state.catReducer.cat);

console.log(Singlecat[1])

const cat=Singlecat[1]


    return(
        <div>
        <Card className="w-76" >


            
            
        <CardHeader color="blue" className="relative h-56">
          <img
            src={cat?.img}
            alt="img-blur-shadow"
            className="h-full w-full shadow-none"
            shadow={false}
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
           Name: {cat?.name}
          </Typography>
        
        </CardBody>
        <CardFooter divider className="flex flex-col items-start justify-between py-3">
          <Typography variant="small">NickName: {cat?.nickName}
          </Typography>

          <Typography variant="small">Age:{cat?.age}
          </Typography>

          <Typography variant="small" color="gray" className="flex gap-1">
          Age Category:{cat?.ageCategory}
         
          </Typography>
        </CardFooter>
      </Card>

        </div>
      
    )

}
export default Home