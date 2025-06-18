import { Context } from "hono";
import { verify } from "hono/jwt";

async function logginMiddleware(c: Context, next :()=> Promise<void>)
{
    

    const token = c.req.header("auth")||""
    const user = await verify(token, c.env.secret_key)
    if(user)
    {
        c.set("userId", user.id)
       await next()
    }
    else
    {
        

        return c.json({
            message:"you are not logged in"
        })
    }
}

export {logginMiddleware}