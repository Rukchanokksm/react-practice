/* eslint-disable react/jsx-key */
import React from "react"
import { useParams } from "react-router-dom"
import usePost from "../hooks/usePost"
import classes from "./PostDetail.module.css"
import { Link } from "react-router-dom"

const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading } = usePost(id)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>Posted by userId: {post.userId}</p>
          <p>{post.body}</p>
          <Link to="/" className={classes.back}>
            back
          </Link>
        </>
      )}
    </div>
  )
}

export default PostDetail
