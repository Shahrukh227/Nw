import { useContext } from "react";
import { SocialMediaList } from "../Store/SocialMedia";

const Message = ()=>{
  const {InitialValue} = useContext(SocialMediaList)
  return (
    <center className="message">
    {InitialValue.length === 0 && <h2>There are no Posts</h2>}
    </center>
    
  )
}

export default Message;