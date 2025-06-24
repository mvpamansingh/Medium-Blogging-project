import { AvatarComponent } from "./BlogCard";


function AppBar()
{
    return(
        <div className="flex flex-row justify-between items-center px-7 py-4 border-b border-slate-300 ">
            <div className="text-xl font-bold text-black">
                Medium
            </div>
            <AvatarComponent authorname="Aman" size ="big"/>
        </div>
    )
}

export {AppBar };