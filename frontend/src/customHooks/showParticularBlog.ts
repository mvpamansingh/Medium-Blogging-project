import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../CONFIG"

interface Blog{
    id:number,
    title:string,
    content:string,
    author:{
        name:string
    }
}

const showParticularBlog =(id:string)=>{

    const [loading, setloading] = useState(true)
    const [particularBlog ,setParticularBlog] = useState<Blog | null>(null)

        useEffect(()=>{

        const fetchBlogs = async()=>{

            try{
                setloading(true)
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                    headers:{
                        Authorization: localStorage.getItem("jwdtToken")
                    }
                })
                setParticularBlog(response.data.blog)
                console.log("Fetched blog:", response.data.blog)
                setloading(false)
            }
            catch(e)
            {
                console.error("Error fetching blogs:", e)
                setloading(false)
            }

            
        }
        fetchBlogs()
        
    },[id])

    
return {
    loading,
    particularBlog
  }
}

export {showParticularBlog ,type Blog} 