import React from "react"
import "./App.css"
import Navbar from "./compound/Navbar"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Create from "./Pages/Create"
import { Route, Routes } from "react-router-dom"
import PostDetail from "./Pages/PostDetail"
import Login from "./Pages/Login"

// const posts = [
//   {
//     id: 1,
//     title: "Let's learn React!",
//   },
//   {
//     id: 2,
//     title: "How to install Node.js",
//   },
//   {
//     id: 3,
//     title: "Basic HTML",
//   },
// ]

function App() {
  // const { currentPost, setCurrentPost, isLoading } = usePost()
  // const [newPost, setNewPost] = useState("")
  // const [newBody, setBody] = useState("")
  // const [currentPost, setCurrentPost] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  //       const data = await res.json()
  //       setCurrentPost(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // console.log("yo")

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   setCurrentPost([
  //     ...currentPost,
  //     {
  //       id: Math.floor(Math.random() * 1000),
  //       title: setCurrentPost,
  //     },
  //   ])
  //   // console.log(posts)
  //   setNewPost("")
  // }

  //fecth post

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
  // // console.log(posts)
  // if (isLoading) return <h1>isLoading...</h1>

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      {/* Move to file Pages */}
      {/* <Greeting />
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} required />
        <input type="text" value={newBody} onChange={(e) => setBody(e.target.value)} required />

        <input type="submit" value="Post" />
      </form>
      <div className="feed-container">
        {currentPost &&
          currentPost.map((post) => {
            return <Post key={currentPost.id} post={post} />
          })}
      </div> */}
    </div>
  )
}

export default App
