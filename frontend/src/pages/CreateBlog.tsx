
import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../CONFIG";

export const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isPublishing, setIsPublishing] = useState(false);
    const navigate = useNavigate();

    const handlePublish = async () => {
        if (!title.trim() || !description.trim()) {
            alert("Please fill in both title and content before publishing.");
            return;
        }


        setIsPublishing(true);


        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description
            }, {
                headers: {
                    Authorization: localStorage.getItem("jwdtToken")
                }
            });
            navigate(`/blog/${response.data.id}`);


        } catch (error) {
            console.error("Failed to publish blog:", error);
            alert("Failed to publish blog. Please try again.");
        } finally {
            setIsPublishing(false);
        }
    };

    const wordCount = description.trim().split(/\s+/).filter(word => word.length > 0).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">


                    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                    }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center">

                        {/* working*/}
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">


                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>


                            <span className="text-sm font-medium">Share Your Story</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">

                            Create Your
                            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                                Masterpiece
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                            Transform your thoughts into compelling stories that inspire, educate, and connect with readers around the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writing Interface */}
            <main className="max-w-5xl mx-auto px-6 py-12">


                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                   
                    <div className="lg:col-span-3">


                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                           
                            <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-b border-gray-100">
                                <div className="flex items-center justify-between">


                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>


                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">Draft Article</h2>
                                            <p className="text-sm text-gray-600">Write your story...</p>
                                        </div>


                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-sm text-gray-500">


                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>


                                        <span>Auto-saved</span>
                                    </div>
                                </div>
                            </div>

                            {/* Form Content */}
                            <div className="p-8 space-y-6">
                                {/* Title Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Article Title</label>
                                    <input 
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                        type="text" 
                                        className="w-full text-3xl font-bold border-none outline-none placeholder-gray-300 bg-transparent resize-none"
                                        placeholder="Enter your compelling title here..."
                                    />
                                    <div className="h-px bg-gradient-to-r from-purple-200 via-pink-200 to-transparent"></div>
                                </div>

                                {/* Content Editor */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Content</label>
                                    <EnhancedTextEditor 
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)} 
                                    />
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">

                                
                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-6 text-sm text-gray-600">
                                        <span className="flex items-center gap-2">


                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>


                                            {wordCount} words
                                        </span>
                                        <span className="flex items-center gap-2">


                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {readTime} min read
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <button 
                                            type="button"
                                            className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                                        >
                                            Save Draft
                                        </button>


                                        <button 
                                            onClick={handlePublish}
                                            disabled={isPublishing || !title.trim() || !description.trim()}
                                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isPublishing ? (
                                                <>
                                                    <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Publishing...
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    Publish Story
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Writing Tips */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                Writing Tips
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Start with a compelling hook to grab readers' attention</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Use clear, concise language and short paragraphs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Include personal stories and examples</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>End with a strong conclusion or call-to-action</span>
                                </li>
                            </ul>
                        </div>

                        {/* Publication Status */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Article Info
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Status:</span>
                                    <span className="font-medium text-orange-600">Draft</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Words:</span>
                                    <span className="font-medium text-gray-900">{wordCount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Read time:</span>
                                    <span className="font-medium text-gray-900">{readTime} min</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Last saved:</span>
                                    <span className="font-medium text-gray-900">Just now</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                    <span className="text-sm">Preview Article</span>
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                    <span className="text-sm">Share Draft</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

function EnhancedTextEditor({ value, onChange }: {value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="relative">
            <textarea 
                onChange={onChange}
                value={value}
                rows={16}
                className="w-full text-lg leading-relaxed border-none outline-none placeholder-gray-400 bg-transparent resize-none"
                placeholder="Tell your story... What insights, experiences, or knowledge do you want to share with the world?"
            />
            {!value && (
                <div className="absolute top-16 left-0 text-gray-400 text-sm space-y-1 pointer-events-none">
                    <p>💡 Start with your main idea</p>
                    <p>📝 Write in your authentic voice</p>
                    <p>🎯 Focus on providing value to readers</p>
                </div>
            )}
        </div>
    );
}