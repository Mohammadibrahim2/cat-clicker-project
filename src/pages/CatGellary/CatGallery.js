import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCats, singleCat } from "../../features/Cats/CatsSlice";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { fetchCats } from "../../features/Cats/allcatsSlice";
import { increment } from "../../features/Counter/counterSlice";


// import Grid from '@material-ui/core/Grid';
const CatGallery=()=>{
    
    
    const cats=useSelector((state)=>state.catReducer.cats);
    const allcats=useSelector((state)=>state.allcatsReducer.posts);
    const count=useSelector((state)=>console.log(state.counterReducer));
    const dispatch=useDispatch()
    dispatch(showCats(allcats))
    console.log(allcats)

    console.log(cats)


useEffect(()=>{
    dispatch(fetchCats())
    if(allcats){
       
    }
   
},[])
    const handleClick=(id)=>{
console.log(id)


        dispatch(singleCat(id))
    }


    const hanldeIncrese=(age)=>{

      const number=parseInt(age)
      dispatch(increment)

    }
        return(
            <div>
                 <Grid container spacing={3}>
                    {
                        cats&&
                        cats.map(cat=> <Grid item xs={12} sm={4}>
                            <Card className="w-76" >
                                <Button variant="text" onClick={()=>handleClick(cat._id)} >

                        
                    
                    
                                
                                
                    <CardHeader color="blue" className="relative h-56">
                      
                      <img
                        src={cat?.img}
                        alt="img-blur-shadow"
                        className="h-full w-full shadow-none"
                        shadow={false}
                        onClick={()=>hanldeIncrese(cat.age)} 
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
                    
                      <Typography variant="small">Age: {cat?.age}
                      </Typography>
                    
                      <Typography variant="small" color="gray" className="flex gap-1">
                      Age Category:{cat?.ageCategory}
                     
                      </Typography>
                    </CardFooter>
                    </Button>
                    </Card>
                    
                              
                            </Grid>
                            )
                    }
       
      
      </Grid>

            </div>
        )


}
export default CatGallery