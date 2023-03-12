import React from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { singleCat } from "../../features/Cats/CatsSlice";


const LeftNav = () => {

  const cats = useSelector((state) => state.catReducer.cats);

  console.log(cats)
  const dispatch = useDispatch()
  const handleClick =(name) => {
    console.log(name)
    dispatch(singleCat(name))



  }
  return (
    <div><h1>
     Category
    </h1>
    <Tabs className="" >
      <TabsHeader className="flex flex-col items-start justify-start">
        {cats.map(({ _id, name,age }) => (
      

         
          <Tab key={_id} value={name}>
          <div>
           <Button variant="text"  onClick={()=>handleClick(_id)}>
             {name} {age}</Button>
             </div>
          </Tab>
         
        ))}
      </TabsHeader>
     
    </Tabs>


    </div>

  )

}
export default LeftNav