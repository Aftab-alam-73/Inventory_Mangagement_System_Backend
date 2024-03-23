import express,{Response,NextFunction} from 'express';
import jwt  from 'jsonwebtoken';
import { customRequest, User } from '../type';

// This is a middleware which checks if the token is valid or not.
export const verifyToken=(req:customRequest,res:Response,next:NextFunction)=>{
    const token:string=req.cookies.access_token;
   
    if(!token){
     return res.status(401).json({success:false ,message:"You don't have access token please login."});
    }
    try{
       const result=jwt.verify(token,"ljfsksdflj") as User;
       if(!result) return res.status(401).json({success:false ,message:"You are not authorized to access"});
       req.userId=result.userId;
       next();
    }catch(err:any){
     res.status(500).json({success:false ,message:""+err.message});
    }
 
 }