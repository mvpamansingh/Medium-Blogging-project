import { AvatarComponent } from "./BlogCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function AppBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg shadow-black/5' 
                : 'bg-white/70 backdrop-blur-lg border-gray-100/30'
        } border-b`}>
            
            {/* Gradient overlay for enhanced glassmorphic effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
            
            <nav className="relative max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* Logo Section */}
                    <Link to="/blogspage" className="group">
                        <div className="flex items-center gap-3">
                            {/* Logo Icon */}
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            
                            {/* Logo Text */}
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                                    StoryHub
                                </span>
                                <span className="text-xs text-gray-500 font-medium tracking-wide">
                                    Share Your Stories
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Navigation Items */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/blogspage" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 relative group">
                            <span>Explore</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
                        </Link>
                        
                        <Link to="/createblog" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 relative group">
                            <span>Write</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
                        </Link>
                        
                        <button className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 relative group">
                            <span>Following</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        
                        {/* Search Button */}
                        <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-105">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Notifications Button */}
                        <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-105 relative">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-4-4V8a7 7 0 00-14 0v5l-4 4h5m14 0v1a3 3 0 01-6 0v-1m-6 0V9a3 3 0 016 0v8z" />
                            </svg>
                            
                            {/* Notification dot */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white shadow-sm"></div>
                        </button>
                        
                        {/* Write Button */}
                        <Link to="/createblog">
                            <button className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95">
                                
                                {/* Button background glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                
                                <span className="hidden sm:inline">Write</span>
                                <span className="sm:hidden">New</span>
                            </button>
                        </Link>
                        
                        {/* Profile Section */}
                        <div className="flex items-center gap-3">
                            <div className="group relative">
                                
                                {/* Profile button with enhanced styling */}
                                <button className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200 group-hover:shadow-md">
                                    <AvatarComponent authorname="Aman" size="large"/>
                                    
                                    {/* User info - hidden on mobile */}
                                    <div className="hidden lg:block text-left">
                                        <div className="text-sm font-semibold text-gray-900">Aman Singh</div>
                                        <div className="text-xs text-gray-500">Writer</div>
                                    </div>
                                    
                                    {/* Dropdown arrow */}
                                    <svg className="hidden lg:block w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Profile status indicator */}
                                <div className="absolute -bottom-0 -right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 text-gray-600 hover:text-gray-800 transition-all duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export { AppBar };