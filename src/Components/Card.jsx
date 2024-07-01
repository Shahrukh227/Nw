import css from "../Styles/Card.module.css"

const Card = ({post})=>{
  return (
    <div className={`${css.carded} card`}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
  </div>
</div>
  )
}

export default Card;
