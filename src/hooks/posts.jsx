import { useState, useEffect } from "react"

const usePosts = () => {
  const [currentPost, setCurrentPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setCurrentPost(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return {
    currentPost,
    setCurrentPost,
    isLoading,
  }
}

export default usePosts
