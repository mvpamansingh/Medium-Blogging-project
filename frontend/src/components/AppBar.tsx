import { AvatarComponent } from "./BlogCard";

import { Link } from "react-router-dom";
function AppBar()
{
    return(
        <div className="flex flex-row justify-between items-center px-7 py-4 border-b border-slate-300 ">
            <Link to ="/blogspage" >
                <div className="text-xl font-bold text-black hover:cursor-pointer hover:text-gray-600 transition-colors">
                Medium
            </div>
            </Link>

            <div className="flex flex-row items-center gap-5">
                
                <Link to="/createblog" >
                <button className="bg-green-500 text-white rounded-2xl px-3 py-1 hover:cursor-pointer">New</button>
                </Link>
                
                <AvatarComponent authorname="Aman" size ="big"/>
            </div>
            
        </div>
    )
}

export {AppBar };