import React, { useState } from "react"
import Classas from "./Create.module.css"
import usePost from "../hooks/posts"

const Create = () => {
  const { isLoading } = usePost()
  const [newPost, setNewPost] = useState("")
  const [newBody, setBody] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        body: JSON.stringify({
          id: Math.floor(Math.random() * 1000),
          title: newPost,
          body: newBody,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      const getPost = await res.json()

      console.log(getPost)

      //   setCurrentPost([...currentPost, getPost])
    } catch (err) {
      console.log(err)
    }
    setNewPost("")
    setBody("")
  }

  if (isLoading) return <h1>IsLoading...</h1>
  return (
    <div className={Classas.boxCreate}>
      <form className={Classas.CreateStyle} onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} required />
        <label>Body:</label>
        <input type="text" value={newBody} onChange={(e) => setBody(e.target.value)} required />
        <input type="submit" value="Post" />
      </form>
      <div>Display Show in console</div>
    </div>
  )
}

export default Create
