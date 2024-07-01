import { createContext, useEffect, useReducer, useState } from "react";

export const SocialMediaList = createContext({
  list : " ",
  InitialValue: [],
  valid : "",
  setting : ()=>{},
//  fetching : false,
// addInitialPost : ()=>{},
 addingPost : ()=>{}
});



const ValueReducer = (currValue,action)=>{
  let newValue = currValue
  if(action.type === "Adding_Post"){
    newValue = [action.payload.posting,...currValue]
  }else if(action.type === "Adding_Initial_Post"){
    newValue = action.payload.post
  }
  return newValue;
}

const SocialMediaListProvider = ({children})=>{
  const [list , setlist] = useState("Home")

  const [InitialValue , dispathValue] = useReducer(ValueReducer,[])
  
const setting = (item)=>{
  setlist(item)
}

const [valid , setvalid] = useState("")

const settingValid = (itemed)=>{
  setvalid(itemed)
}

const addingPost = (posting)=>{
 let addPost = {
  type : "Adding_Post",
  payload : {
    posting
  }
  
 }
 dispathValue(addPost)
}


const addInitialPost = (post)=>{
let inital = {
  type : "Adding_Initial_Post",
  payload : {
    post
  }
}
dispathValue(inital)
}

const [fetching , setFetching] = useState(false)

useEffect(()=>{
  setFetching(true)
  // console.log("helo")
  const controller = new AbortController;
  const signal = controller.signal;

  fetch('https://jsonplaceholder.typicode.com/posts',{signal})
  .then((response) => response.json())
  .then((json) =>{
    
    addInitialPost(json)
    setFetching(false)
    // console.log("helo world")
  } );
  // console.log("world")
  

  return ( )=>{
    controller.abort()
  }
},[])

  return <SocialMediaList.Provider value={{setting,
    list,
    InitialValue,
    fetching,
    valid,
    // addInitialPost,
    setting,
    settingValid,
    addingPost}
  }>{children}</SocialMediaList.Provider>
}

export default SocialMediaListProvider;
