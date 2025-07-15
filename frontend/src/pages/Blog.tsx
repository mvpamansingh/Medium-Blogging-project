import { ParticularBlogComponent } from "../components/ParticularBlogComponent";
import { Skeleton } from "../components/Skeleton";
import { showParticularBlog, type Blog } from "../customHooks/showParticularBlog";
import { useParams } from "react-router-dom";

function IndividualBlog() {
  const {id} = useParams()
  const {loading, particularBlog} = showParticularBlog(id||"1"); 
  
  if(loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Skeleton */}

        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>


          <div className="relative max-w-7xl mx-auto px-6 py-16">
            <div className="max-w-4xl">


              <div className="h-8 bg-white/20 rounded-lg w-32 mb-6 animate-pulse"></div>
              <div className="h-16 bg-white/20 rounded-lg w-full mb-4 animate-pulse"></div>


              <div className="h-16 bg-white/20 rounded-lg w-3/4 mb-6 animate-pulse"></div>
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
                <div>

                  <div className="h-4 bg-white/20 rounded w-32 mb-2 animate-pulse"></div>

                  <div className="h-3 bg-white/20 rounded w-24 animate-pulse"></div>
                </div>
              </div>

            </div>

          </div>

        </div>
        
        {/* Content Skeleton */}
        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 space-y-6">

              <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>

              <div className="h-6 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>

              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>


              <div className="h-6 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 space-y-4">

                <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>

                <div className="flex items-center gap-3">


                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="space-y-2">



                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <ParticularBlogComponent blog={particularBlog || {
        id: 1,
        title: "",
        content: "",
        author: {
          name: ""
        }
      }}/>
    </div>
  );
}

export {IndividualBlog};