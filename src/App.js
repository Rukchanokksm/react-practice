import React from "react"
import "./App.css"
import Navbar from "./compound/Navbar"
import Greeting from "./compound/Greeting"
import Post from "./compound/Post"

const posts = [
  {
    id: 1,
    title: "Let's learn React!",
  },
  {
    id: 2,
    title: "How to install Node.js",
  },
  {
    id: 3,
    title: "Basic HTML",
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Geust" />
      <div className="feed-container">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
