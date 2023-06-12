/* eslint-disable react/react-in-jsx-scope */
import usePosts from "../hooks/posts"
// import { useState } from "react"
import Post from "../compound/Post"
import { useAuth } from "../providers/AuthProviders"
import { NavLink } from "react-router-dom"
// import Classas from "../Pages/HomeStyle.module.css"

const Home = () => {
  const { currentPost, setCurrentPost, isLoading } = usePosts()
  const { isLogIn } = useAuth()

  console.log(isLogIn)
  // const [newPost, setNewPost] = useState("")
  // const [newBody, setBody] = useState("")

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: Math.floor(Math.random() * 1000),
  //         title: newPost,
  //         body: newBody,
  //         userId: 1,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //     const getPost = await res.json()

  //     console.log(getPost)

  //     setCurrentPost([...currentPost, getPost])
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   setNewPost("")
  //   setBody("")
  // }
  if (isLoading) return <h1>IsLoading...</h1>
  return (
    <div>
      {/* <Greeting /> */}
      {/* <form className={Classas.homeStyle} onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} required />
        <label>Body:</label>
        <input type="text" value={newBody} onChange={(e) => setBody(e.target.value)} required />
        <input type="submit" value="Post" />
      </form> */}
      <div className="feed-container">
        {isLogIn && (
          <div>
            <NavLink to="/create">Create Post</NavLink>
          </div>
        )}

        {currentPost &&
          currentPost.map((post) => {
            return <Post key={currentPost.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
