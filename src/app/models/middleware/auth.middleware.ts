import jwt from 'jsonwebtoken';
import type { NextFunction, Request, Response } from "express";

// 🔹 Token verify middleware
export const auth = (req:Request,res:Response,next:NextFunction) =>{
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(401).json({message:'Unauthorized'})

        try{
            const decoded:any = jwt.verify(token, process.env.JWT_SECRET!);
            (req as any).user = decoded;
            next()
        }catch{
            return res.status(401).json({message:'Invalid token'})
        }
}


// 🔹 Role-based authorization (admin/user )
export const authorization = (...roles:string[])=>{
    (req:any, res:Response, next:NextFunction) =>{
        if(!req.user || !roles.includes(req.user.role)){
            return res.status(403).json({message:'Forbidden: You have no access'})
        }
        next()
    }
    
}