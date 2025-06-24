import { ParticularBlogComponent } from "../components/ParticularBlogComponent";
import { Skeleton } from "../components/Skeleton";
import { showParticularBlog, type Blog } from "../customHooks/showParticularBlog";
import { useParams } from "react-router-dom";

function IndividualBlog() {
  const {id} = useParams()
  const {loading, particularBlog} = showParticularBlog(id||"1"); 
  
  if(loading)
  {
    // return (
    //   <div className="flex items-center justify-center h-screen">
    //     <h1 className="text-2xl text-gray-500">Loading...</h1>
    //   </div>
    // );
    return (
      <div className=" flex justify-center w-full ">
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        
      </div>
      
    )
    
    
  }


  return (
    <div>
      <ParticularBlogComponent blog ={particularBlog || {
              id:1,
              title:"",
              content:"",
              author:{
                  name:""
              }
          }}/>
    </div>
  );
}

export {IndividualBlog };