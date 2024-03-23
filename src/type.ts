import { Request } from "express"

export type Bill={
  productName:string,
  price:number,
  numberOfProducts:number,
  totalAmount:number,
  productId:number,
  customerId:number
}

interface customRequest extends Request {
  userId?: number; 
}

export { customRequest };

export type User={
    userId: number;
    username: string;
    email: string;
    password: string;
    profile: string | null;
}

export type SinginData={
  username: string,
  password: string
}
export type SignupData={
  username: string,
  email: string,
  password: string
}