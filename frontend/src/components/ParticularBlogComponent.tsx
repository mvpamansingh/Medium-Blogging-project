import type { Blog } from "../customHooks/showParticularBlog";

function ParticularBlogComponent({blog}:{blog:Blog})
{
    return (
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl mx-auto">

        <div className="col-span-8">
            <div className="text-5xl font-extrabold mb-4">
            {blog.title}
            </div>
            <div className="text-slate-500 mb-8">
                Posted by <strong>{blog.author.name}</strong>
            </div>
            <div className="text-lg leading-7">
            {blog.content}
            </div>
        </div>

        <div className="col-span-4 pl-8">
            <div className="text-slate-600 text-lg">
                Author
            </div>
            <div className="flex items-center justify-top mt-2">
                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                    {blog.author.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xl">
                    {blog.author.name}
                    </div>
                    <div className="text-sm text-gray-500">
{`some ranom text about the author to fill the space and make it look good.`}
                    </div>
                    
                </div>

            </div>
        </div>
        </div>
    )
} 

export {ParticularBlogComponent};