import { useContext } from "react";
import { SocialMediaList } from "../Store/SocialMedia";
import Cardlist from "./Cardlist";
import Forms from "./Forms";

const Logic = ()=>{
const {list} = useContext(SocialMediaList)
return (
<>
{list === "Home" ? <Cardlist></Cardlist> : <Forms></Forms>}
</>
)
}

export default Logic;