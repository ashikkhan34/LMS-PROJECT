import type { Request, Response } from "express";
import { authService } from "./auth.service.js";

export const authController = {
    //register controller
    async register(req:Request,res:Response){
        try{
            const result = await authService.register(req.body)
            res.status(201).json({
                success:true,
                message:'User register successfully',
                data:result
            })
        }catch(error:any){
            res.status(400).json({success:false, message:error.message})
        }
    },


    //login controller
    async login(req:Request,res:Response) {
        try{
            const result = await authService.login(req.body)
            res.status(200).json({
                success:true,
                message:'login successful',
                data:result,
            })
        }catch(error: any){
            res.status(400).json({success:false, message:error.message})
        }
    }
}