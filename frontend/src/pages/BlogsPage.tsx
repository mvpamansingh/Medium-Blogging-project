import { Link } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import useBlogHook from "../customHooks/useBlogHook";

function BlogsPage() {
    const {loading, blogs} = useBlogHook()
    
    if(loading) {
        return(
            <div className="min-h-screen bg-gray-50">
                {/* Hero Skeleton */}
                <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">

                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 py-16">


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                            <div>
                                <div className="h-12 bg-white/20 rounded-lg w-3/4 mb-6 animate-pulse"></div>
                                <div className="h-6 bg-white/20 rounded w-full mb-4 animate-pulse"></div>
                                <div className="h-6 bg-white/20 rounded w-2/3 animate-pulse"></div>
                            </div>
                            <div className="h-64 bg-white/20 rounded-2xl animate-pulse"></div>
                        </div>
                    </div>
                </div>
                
                {/*  Skeleton when website is loading */}
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </div>
        )
    }

    // Get featured blog (first one or most recent)
    const featuredBlog = blogs[0];
    const regularBlogs = blogs.slice(1);

    return(
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}

            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">  
                
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{

                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                    }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


                        {/* Left Column Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">


                                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>

                                    <span className="text-sm font-medium">Fresh Stories Daily</span>
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                    Discover
                                    <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                                        Amazing Stories
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                                    Dive into a world of insights, creativity, and knowledge shared by talented writers from around the globe.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/createblog" 
                                    className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Start Writing
                                </Link>
                                
                                <button className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200">
                                    
                                    
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    Explore Topics
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Featured Blog Preview */}
                        {featuredBlog && (
                            <div className="relative">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                                            {featuredBlog.author.name[0]?.toUpperCase()}
                                        </div>
                                        <div>


                                            <p className="font-semibold text-white">{featuredBlog.author.name}</p>
                                            <p className="text-sm text-gray-300">Featured Author</p>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                        {featuredBlog.title}
                                    </h3>
                                    
                                    <p className="text-gray-200 mb-4 line-clamp-3">
                                        {featuredBlog.content.substring(0, 120)}...
                                    </p>
                                    
                                    <Link 
                                        to={`/blog/${featuredBlog.id}`}
                                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                                    >
                                        Read Featured Story
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                                
                                {/* Floating Elements */}

                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-8">


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{blogs.length}</div>
                            <div className="text-sm text-gray-600 font-medium">Stories Published</div>
                        </div>
                        <div className="text-center">


                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {new Set(blogs.map((blog: any) => blog.author.name)).size}
                            </div>

                            <div className="text-sm text-gray-600 font-medium">Active Writers</div>

                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">


                                {Math.ceil(blogs.reduce((acc: number, blog: any) => acc + blog.content.length, 0) / 100)}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">Minutes of Reading</div>
                        </div>

                        <div className="text-center">

                            <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
                            <div className="text-sm text-gray-600 font-medium">Inspiration</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-8">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Stories</h2>
                        <p className="text-gray-600">Fresh perspectives and insights from our community</p>
                    </div>
                    
                    <div className="flex items-center gap-4">

                        <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                            <option>Most Recent</option>
                            <option>Most Popular</option>
                            <option>Trending</option>
                        </select>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {regularBlogs.map((blog: any, index: any) => (
                        <Link 
                            key={blog.id || index}
                            to={`/blog/${blog.id}`} 
                            className="block group transform transition-all duration-200 hover:scale-[1.02]"
                        >
                            <BlogCard 
                                author_name={blog.author.name}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={blog.published}
                            />
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                {regularBlogs.length > 0 && (
                    <div className="text-center mt-12">


                        <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            Load More Stories
                        </button>

                        
                    </div>
                )}

                {/* Empty State if no blogs is published yet for the first time */}
                {blogs.length === 0 && (
                    <div className="text-center py-16">


                        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">

                            <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No Stories Yet</h3>

                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Be the pioneer! Share your thoughts, experiences, and insights with our growing community.
                        </p>


                        <Link 
                            to="/create-blog"
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Write Your First Story
                        </Link>
                    </div>
                )}
            </main>
        </div>
    )
}

export default BlogsPage;