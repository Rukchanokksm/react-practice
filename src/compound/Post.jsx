import React from "react"
import classes from "./Post.module.css"

const Post = (props) => {
  const { post } = props

  const handleClick = () => {
    alert(`Post ${post.id} clicked!`)
  }

  return (
    <div onClick={() => handleClick(post.id)} className={classes.poststyle}>
      <p>ID : {post.id}</p>
      <p>TITLE : {post.title}</p>
    </div>
  )
}

export default Post
