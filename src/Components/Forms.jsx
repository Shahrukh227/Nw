import { useContext, useRef } from "react";
import css from "../Styles/Forms.module.css"
import { SocialMediaList } from "../Store/SocialMedia";
import { Form, useNavigate } from "react-router-dom";

const Forms = ()=>{

  const {addingPost} = useContext(SocialMediaList)


  const Id = useRef();
  const Title = useRef();
  const Body = useRef();

  const navigate = useNavigate()

  const ClickedPost = (event)=>{
    event.preventDefault();
    const id = Id.current.value;
    const title = Title.current.value;
    const body = Body.current.value;

    Id.current.value = "";
    Title.current.value = "";
   Body.current.value = "";

   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) =>{
      addingPost(json)
      navigate("/")
    } 
  )
  // settingValid ("Home")
  // addingPost(item)
  }


  

  return (
    <form  className={css.forms} onSubmit={ClickedPost}>
  <div className="mb-3">
    <label htmlFor="Id" className="form-label">ID</label>
    <input type="text" className="form-control" id="Id" ref={Id}/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title"  ref={Title}/>
  </div>

  <div className="mb-3">
  <label htmlFor="body" className="form-label">Body</label>
  <textarea className="form-control" rows="3" id="body"  ref={Body}></textarea>
</div>

  <div className="mb-3 form-check">
  </div>
  <button className="btn btn-primary">Post</button>
</form>
  )
}

// export async function SocialAction(data) {
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);
//   console.log(postData)

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({postData}),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) =>{
//       ClickedPost(json)
//       // console.log(json)
//       // navigate("/")
//     } 
//   )
//   return redirect("/")
// }


export default Forms