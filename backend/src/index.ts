import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput, signinInput,createBloginput, updateBloginput } from '@aman108/medium-project-zod-types'
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    secret_key:string
  }
}>()
app.use('/*',cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.post("/api/v1/signup", async(c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

const body = await c.req.json()

const {success} = signupInput.safeParse(body)
if(!success)
{
  return c.json({
    error:"Wrong inputs"
  })
}
try{
 const user   = await prisma.user.create(
    {
      data:{
        email:body.email,
        password: body.password,
        name: body.name
      }
    }
  )

  const secret_key =c.env.secret_key
  const payload= {
    id:user.id,

  }
  // signing / genrating the token
  const token = await sign(payload, secret_key)
  return c.json({
    token:token,
    userId:user.id,
    name:user.name
  })
}
catch(e)
{
  console.log(`error - ${e}`)
}
  
})

app.post("/api/v1/user/signin", async(c)=>{

    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  const body = await c.req.json()
  console.log(body);
  const {success} = signinInput.safeParse(body)
  if(!success)
  {
    return c.json({
      error:"Wrong inputs"
    })
  }

  const {email, password} = body

  const count = await prisma.user.count({
    where:{
      email:email
    }
  })

  if(count==0)
  {
    return c.json({
      "error":"user donot exist"
    })
  }
  const user = await prisma.user.findUnique({
    where:{
      email:email,
      password:password
    },
    select:{
      email:true,
      id:true,
      name:true
    }
  })

  const payload={
    id:user?.id
  }
  const token = await sign(payload, c.env.secret_key)
  return c.json({
    token:token,
    userId: user?.id,
    name:user?.name

  })
})



app.post("/api/v1/blog", async (c)=>{
  
  const body = await c.req.json()
  
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const {success} = createBloginput.safeParse(body)
    if(!success)
    {
      
      return c.json({
        error:"Wrong inputs"
      })
    }
    try{
        const blog = await prisma.post.create({
          data:{
            title:body.title,
            content:body.content,
            authorId:27
          },
          select:{
            title:true,
            content:true,
            authorId:true,
            id:true
          }
        })

        return c.json({
          id:blog.id,
          title:blog.title,
          content:blog.content,
          authorId:blog.authorId
        })
    }
    catch(e)
    {
      console.log(e);
      return c.json({
        error: "Error creating blog post"
      }, 500)
    }
})

app.put("/api/v1/blog", async(c)=>{

    const body = await c.req.json()
  
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const {success} = updateBloginput.safeParse(body)
    if(!success)
    {
      

      return c.json({
        error:"Wrong inputs"
      })
    }
    try{
        const blog = await prisma.post.update({
          data:{
            title:body.title,
            content:body.content,
            
          },
          select:{
            title:true,
            content:true,
            authorId:true,
            id:true
          },
          where:{
            id:body.id
          }
        })

        return c.json({
          id:blog.id,
          title:blog.title,
          content:blog.content,
          authorId:blog.authorId
        })
    }
    catch(e)
    {
      console.log(e);
    }
  
})


app.get("api/v1/blog/bulk", async(c)=>{

      const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const allBlogs =await prisma.post.findMany({
      select:{
        id:true,
        title:true,
        content:true,
        published:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })

    return c.json({
      allBlogs
    })
 
})

app.get("api/v1/blog/:id",async (c)=>{
  const {id} = c.req.param();

        const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog =await prisma.post.findUnique({
          where:{
            id:Number(id)
          },
          select:{
            id:true,
            title:true,
            content:true,
            author:{
              select:{
                name:true
              }
            }
          }
        })

        return c.json({
          blog:blog
        })
    }
    catch(e)
    {
      console.log(e);
      return c.json({
        error: "Error fetching blog post"
      }, 500)
    }
  	
})
export default app


