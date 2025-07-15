import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../CONFIG"
import { type Blog } from "./showParticularBlog"
const useBlogHook = ()=>{

    const [loading , setloading] = useState<boolean>(false)
    const[blogs, setblogs] = useState<Blog[]>([])

    useEffect(()=>{

        const fetchBlogs = async()=>{

            try{
                setloading(true)
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                    headers:{
                        Authorization: localStorage.getItem("jwdtToken")
                    }
                })
                setblogs(response.data.allBlogs)
                setloading(false)
            }
            catch(e)
            {
                console.error("Error fetching blogs:", e)
                setloading(false)
            }

            
        }
        fetchBlogs()
        
    },[])

    
return {
    loading,
    blogs
  }
}

export default useBlogHook  