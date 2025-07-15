import { SignUpAccountComponent, SignUpQuoteComponent } from "../components/SignUpComponent";

function SignUpPage(){

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen pt-20">

            <div className=" bg-white ">
                <SignUpAccountComponent/>
                                    
            </div>
            
            <div className="hidden lg:block bg-zinc-200 text-white">
                <SignUpQuoteComponent/>

            </div>
            
           
        </div>
    )
}

export default SignUpPage;