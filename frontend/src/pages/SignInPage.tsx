import { LogInCreateAccount, LoginQuotesComponent } from "../components/LogInComponent";

function SignInPage()
{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
            

           
            <div className=" bg-white text-black">
                <LogInCreateAccount />
            </div>
            
            <div className="hidden lg:block bg-zinc-200 text-white">
                <LoginQuotesComponent />
            </div>
        </div>
    )


    
}



export default SignInPage;