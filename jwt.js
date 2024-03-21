import jwt from 'jsonwebtoken';

// This function genrates a token.
export const generateToken=(data)=>{
    const token= jwt.sign(data,"ljfsksdflj");
    return token;
}

// This is a middleware which checks if the token is valid or not.
export const verifyToken=(req,res,next)=>{
   const token=req.cookies.access_token;
  
   if(!token){
    return res.status(401).json({success:false ,message:"You don't have access token please login."});
   }
   try{
      const result=jwt.verify(token,"ljfsksdflj");
      if(!result) return res.status(401).json({success:false ,message:"You are not authorized to access"});
      req.userId=result.userId;
      next();
   }catch(err){
    res.status(500).json({success:false ,message:""+err.message});
   }

}