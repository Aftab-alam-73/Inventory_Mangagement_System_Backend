import { User } from '../type';
import jwt from 'jsonwebtoken';

// This function genrates a token.
export const generateToken=(data:User)=>{
    const token= jwt.sign(data,"ljfsksdflj");
    return token;
}

