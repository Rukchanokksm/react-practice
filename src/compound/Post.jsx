import React, { useState } from "react"
import classes from "./Post.module.css"

const content = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    text: "Lorem, ipsum dolor.",
  },
]

const Post = (props) => {
  const { post } = props
  const handleClick = () => {
    alert(`Post ${post.id} clicked!`)
  }

  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    // <div onClick={() => handleClick(post.id)} className={classes.poststyle}>
    //   <p>ID : {post.id}</p>
    //   <p>TITLE : {post.title}</p>
    //   <button>showmore</button>
    // </div>
    <div onClick={() => handleClick(post.id)} className={classes.poststyle}>
      <p>ID : {post.id}</p>
      <p>TITLE : {post.title}</p>
      <p>Body : {post.body}</p>
      {/* {
        content.map((con) =>{
      return {isShow && {con.text}}   
        })} */}
      {isShow && (
        <p>
          Lorem ipsum dolor sit amet, vitae unde magnam architecto quasi ullam? Iure perspiciatis labore doloremque
          odio....
        </p>
      )}
      <button onClick={toggleShow}>{isShow ? "Show Less" : "Show More"}</button>
    </div>
  )
}

export default Post
