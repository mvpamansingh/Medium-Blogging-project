import type { SignupInput } from "@aman108/medium-project-zod-types" 
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../CONFIG"

function LogInCreateAccount()
{
    // const userSignUpInputs :SignupInput ={
    //     email: "",
    //     password: "",
    //     name: ""
    // }


    const navigate = useNavigate()
    // Force the type of userSignUpInputs to be SignupInput, to ensure type safety
    const [userSignInInputs , setUserSignInInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    async function handleSignIn()
    {
        try{
            const respnse = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,userSignInInputs)
            const jwtToken =await  respnse.data.token
        const myUserId = respnse.data.userId
        const myUserName = respnse.data.name
            console.log(jwtToken)
            localStorage.setItem("jwdtToken",jwtToken)
        localStorage.setItem("myUserId", myUserId)
        localStorage.setItem("myUserName", myUserName)
            navigate("/blogspage")
        }
        catch(e)
        {
            console.error("Error during sign in:", e)
            // Handle error appropriately, e.g., show a notification or alert
            alert("Sign in failed. Please check your credentials.")
        }
        

    }

    
    return(
        <div className="flex flex-col items-center justify-center  max-w-xl mx-auto h-screen gap-5 ">
        {JSON.stringify(userSignInInputs)}
            <h1 className="text-3xl font-bold">Welcome</h1>
            <div className="flex flex-row items-center gap-2">
                <h2 className="text-gray-600 font-medium text-xl">Need an account?</h2>
                <h2 onClick={()=>{
                    navigate("/signup") 
                }}className="text-gray-600 font-medium text-xl underline hover:cursor-pointer">SignUp</h2>
            </div>

            <div className="flex flex-col items-start justify-start w-full gap-2">
                
            {/* <h1 className="text-lg font-medium ">Username</h1>
            <input type = "text" placeholder="Enter your username" 

            value={userSignInInputs.name} 

            onChange={(e)=>{
                 its help u override the name and lets u retain the existing data 
                setUserSignInInputs({         
                    ...userSignInInputs,
                    name:e.target.value
                })
            }} className="border-1 w-full rounded-md border-gray-300 px-2 py-2"></input> */}

            <h1 className="text-lg font-medium mt-3">Email</h1>
            <input type = "email" placeholder="email@example.com" value={userSignInInputs.email} onChange={(e)=>{
                setUserSignInInputs({
                    ...userSignInInputs,
                    email:e.target.value
                })
            }} className="border-1 w-full rounded-md border-gray-300 px-2 py-2"></input>

            <h1 className="text-lg font-medium mt-3">Password</h1>
            <input type = "password" placeholder="Enter your password" value={userSignInInputs.password} onChange={(w)=>{
                setUserSignInInputs({
                    ...userSignInInputs,
                    password:w.target.value
                })
            }} className="border-1 w-full rounded-md border-gray-300 px-2 py-2"></input>

            <button onClick={handleSignIn} className="bg-black text-white px-4 py-2 rounded-md mt-5 hover:bg-gray-600 transition-colors w-full hover:cursor-pointer">Sign In</button>
            </div>
            
            



        </div>
    )
}


function LoginQuotesComponent()
{
    return(
        <div className="flex flex-col items-center justify-center  max-w-xl mx-auto h-screen  ">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                “A reader lives a thousand lives before he dies; the man who never reads lives only one.”
            </h1>

            
            <h1 className="text-lg font-medium text-gray-600 text-center mb-4">
                - George R.R. Martin
            </h1>


        </div>
    )
}

export {LogInCreateAccount, LoginQuotesComponent}