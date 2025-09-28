import type { Request, Response } from "express"
import { mentorService } from "./mentor.service.js"


const createMentorController = async(req:Request,res:Response) =>{
    try{
        const mentor = await mentorService.CreateMentorService(req.body)
        res.status(201).json({
            message:'mentor data added',
            success:true,
            mentor:mentor
        })
    }catch(err){
        console.log(err)
    }
}

 export const mentorController = {
    createMentorController
}