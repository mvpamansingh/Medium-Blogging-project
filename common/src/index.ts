
import zod from "zod"

const signupInput = zod.object({
    email:zod.string().email(),
    password: zod.string().min(6),
    name:zod.string().optional()
})

type SignupInput = zod.infer<typeof signupInput>

const signinInput = zod.object({
    email:zod.string().email(),
    password: zod.string().min(6),
    name:zod.string().optional()
})

type SignipInput = zod.infer<typeof signinInput>

const createBloginput = zod.object({
    title: zod.string(),
    content:zod.string()
})

type CreateBlofInput = zod.infer<typeof createBloginput>

const updateBloginput = zod.object({
    title: zod.string(),
    content:zod.string(),
    id:zod.number()
})

type UpdateBlogInput = zod.infer<typeof updateBloginput>

export { signinInput , signupInput, SignipInput,SignupInput, createBloginput ,CreateBlofInput,  updateBloginput, UpdateBlogInput}