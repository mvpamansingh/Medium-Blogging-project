interface BlogCardProps{
    author_name: string;
    title:string,
    content:string,
    publishedDate:string
}

function BlogCard(blogCardProps:BlogCardProps) {
    // Helper function to truncate content
    const truncateContent = (content: string, maxLength: number = 200) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength).trim() + "...";
    };

    // Helper function to format date should work
    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
        } catch {
            return dateString;
        }
    };

    return(
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group">
            {/* Author and Date Section */}
            <div className="flex items-center gap-3 mb-4">


                <AvatarComponent authorname={blogCardProps.author_name} />


                <div className="flex items-center gap-2 text-sm">

                    <span className="font-medium  text-gray-900">
                        {blogCardProps.author_name}
                    </span>

                    <span className="text-gray-400">•</span>
                    
                    <time className="text-gray-600">
                        {formatDate(blogCardProps.publishedDate)}
                    </time>
                </div>
            </div>

            {/* Title Section */}
            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {blogCardProps.title}
            </h2>

            {/* Content Preview */}
            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {truncateContent(blogCardProps.content)}
            </p>

            {/* Footer with Reading Time when particular blog is published */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-500 font-medium">cd
                        {`${Math.ceil(blogCardProps.content.length/100)} min read`}
                    </span>
                </div>
                
                <div className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-sm font-medium">Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </article>
    )
}



function AvatarComponent({authorname, size = "small"}: {authorname: string, size?: string}) {


    const sizeClasses = {
        small: "w-10 h-10 text-sm",
        large: "w-12 h-12 text-base"
    };

    return(

        <div className={`${sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.small} 
                        bg-gradient-to-br from-blue-500 to-purple-600 
                        text-white font-semibold 
                        flex items-center justify-center 
                        rounded-full 
                        shadow-sm 
                        ring-2 ring-white 
                        flex-shrink-0`}>

            {authorname[0]?.toUpperCase()}
        </div>
    )
}

export {BlogCard, type BlogCardProps, AvatarComponent};

