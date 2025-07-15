import { Link } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import useBlogHook from "../customHooks/useBlogHook";


function BlogsPage() {

    const {loading, blogs} = useBlogHook()
    if(loading)
    {
        // return(
        //     <div className="flex items-center justify-center h-screen">
        //         <h1 className="text-2xl text-gray-500">Loading...</h1>
        //     </div>
        // )
        return(
                    <div  className="flex justify-center">
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        )

    }

    return(
        <div className="flex flex-col max-w-3xl mx-auto gap-2">
            {blogs.map((blog:any,index:any)=>(

                <Link to ={`/blog/${blog.id}`} className="text-black hover:text-gray-600 transition-colors">
                <BlogCard key={index} author_name={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={blog.published}/>

                    </Link>
            )

                
            )}


            {/* <BlogCard author_name='Aman' title='How an ugly website can make you 5000 dollor a month no flex no buzz' content='This is the content of my first blog post.and its tottlay not a scam read it nd wase your tuime ahhaah loloo' publishedDate='24 Jan 2025'/>
            <BlogCard author_name='Aman' title='How an ugly website can make you 5000 dollor a month no flex no buzz' content='This is the content of my first blog post.and its tottlay not a scam read it nd wase your tuime ahhaah loloo' publishedDate='24 Jan 2025'/>
            <BlogCard author_name='Aman' title='How an ugly website can make you 5000 dollor a month no flex no buzz' content='This is the content of my first blog post.and its tottlay not a scam read it nd wase your tuime ahhaah loloo' publishedDate='24 Jan 2025'/> */}

        </div>
    )
}

export default BlogsPage;