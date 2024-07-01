import { useContext } from "react";
import Card  from "./Card"
import {SocialMediaList} from "../Store/SocialMedia"
import Loading from "./Loading";
import Message from "./Message";
import { useLoaderData } from "react-router-dom";

const Cardlist = ()=>{
  const {InitialValue,fetching} = useContext(SocialMediaList)

  // const InitialValue = useLoaderData();
  return (
    <>
    {fetching && <Loading></Loading> }
    {!fetching && <Message></Message>}
    {!fetching && InitialValue.map((item)=><Card key={item.id} post={item}/>)}
    </>
  )
}

// export const dataLoader = ()=>{
//   return  fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) =>{
//   return  json
//   } );
// }

export default Cardlist;