import type { SignupInput } from "@aman108/medium-project-zod-types" 
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../CONFIG"

function SignUpAccountComponent()
{
    // const userSignUpInputs :SignupInput ={
    //     email: "",
    //     password: "",
    //     name: ""
    // }
    // Force the type of userSignUpInputs to be SignupInput, to ensure type safety
    const [userSignUpInputs , setUserSignUpInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })


    const navigate = useNavigate()

    async function handleSignUp()
    {
        const response  = await axios.post(`${BACKEND_URL}/api/v1/signup`,userSignUpInputs)
        const jwtToken =response.data.token
        console.log(jwtToken)
        localStorage.setItem("jwtToken",jwtToken)
        navigate("/blogspage")
    }
    return(
        <div className="flex flex-col items-center justify-center  max-w-xl mx-auto h-screen gap-5 ">
        {JSON.stringify(userSignUpInputs)}
            <h1 className="text-3xl font-bold">Create Account</h1>
            <div className="flex flex-row items-center gap-2">
                <h2 className="text-gray-600 font-medium text-xl">Already have an account?</h2>
                <h2 onClick={()=>{
                    navigate("/signin")
                }} className="text-gray-600 font-medium text-xl underline hover:cursor-pointer">SignIn</h2>
            </div>

            <div className="flex flex-col items-start justify-start w-full gap-2">
            <h1 className="text-lg font-medium ">Username</h1>
            <input type = "text" placeholder="Enter your username" 

            value={userSignUpInputs.name} 

            onChange={(e)=>{
                setUserSignUpInputs({         /** its help u override the name and lets u retain the existing data */
                    ...userSignUpInputs,
                    name:e.target.value
                })
            }} className="border-1 w-full rounded-md border-gray-300 px-2 py-2"></input>

            <h1 className="text-lg font-medium mt-3">Email</h1>
            <input type = "email" placeholder="email@example.com" value={userSignUpInputs.email} onChange={(e)=>{
                setUserSignUpInputs({
                    ...userSignUpInputs,
                    email:e.target.value
                })
            }} className="border-1 w-full rounded-md border-gray-300 px-2 py-2"></input>

            <h1 className="text-lg font-medium mt-3">Password</h1>
            <input type = "password" placeholder="Enter your password" value={userSignUpInputs.password} onChange={(w)=>{
                setUserSignUpInputs({
                    ...userSignUpInputs,
                    password:w.target.value
                })
            }} className="border-1 w-full rounded-md border-gray-300 px-2 py-2"></input>

            <button onClick={handleSignUp} className="bg-black text-white px-4 py-2 rounded-md mt-5 hover:bg-gray-600 transition-colors w-full hover:cursor-pointer">Sign Up</button>
            </div>
            
            



        </div>
    )
}


function SignUpQuoteComponent()
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

export {SignUpAccountComponent, SignUpQuoteComponent}