interface BlogCardProps{
    author_name: string;
    title:string,
    content:string,
    publishedDate:string
}
function BlogCard(blogCardProps:BlogCardProps)
{
    return(
        <section className="flex flex-col items-start justify-start w-full bg-white p-5 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-start gap-2">
                <AvatarComponent authorname ={blogCardProps.author_name}/>
                <h1 className="text-black text-lg">{blogCardProps.author_name}</h1>
                <h1 className="text-gray text-lg">{blogCardProps.publishedDate}</h1>
                
            </div>
            <h1 className="text-2xl text-black font-bold">{blogCardProps.title}</h1>
            <p className="text-xl text-gray font-normal">{blogCardProps.content}</p>

            <div className="justify-start text-gray-400 text-sm font-normal">
            {`${Math.ceil(blogCardProps.content.length/100)} min read`}
            </div>
        </section>
    )
}

function AvatarComponent({authorname, size= "small"}:{authorname:string, size?:string})
{
    return(
        <div className={`${size ==="small" ? "w-7 h-7" : "w-10 h-10"} bg-gray-300 flex items-center justify-center  rounded-full px-2 py-2`}>{authorname[0]}</div>
    )
}
export {BlogCard, type BlogCardProps, AvatarComponent};

