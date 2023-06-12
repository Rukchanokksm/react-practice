import { useEffect, useState } from "react"

const usePost = (id) => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // const { id } = useParams()
  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        console.log(data)
        setPost(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchdata()
  }, [])

  return {
    post,
    isLoading,
  }
}

export default usePost
