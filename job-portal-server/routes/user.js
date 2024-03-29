import express from 'express'
import bcryt from 'bcrypt'
const router =express.Router();
import {User} from '../models/User'

router.post('/signup',async(req,res)=>{
    const {username,email,password}=req.body;
    const user=User.find({email})
    if(user){
        return res.json({message:"user already existed"})
    }

    const hashpassword=await bcryt.hash(password,10)
    const newUser=new ({
        username,
        email,
        password:hashpassword,
    })
    await newUser.save()
    return res.json({message:"record registed"})
})

export {router as UserRouter}