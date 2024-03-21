import { db } from "../db connection.js";

export const getAllProducts=async(__,res)=>{
    try{
        const AllProducts=await db.inventory.findMany()
        return res.status(200).json(AllProducts)
    }catch(err){
        return res.status(500).json({success:false,message:err.message})
    }
}
export const getSingleProduct=async(req,res)=>{
  const {id}=req.params;
  try{
    const product=await db.inventory.findUnique({where:{productId:Number(id)}})
    return res.status(200).json(product);
  }catch(err){
    return res.status(500).json({success:false,message:err});
  }
}
export const  addProduct=async(req,res)=>{
   try{
      req.body.totalValue=req.body.price*req.body.quantity;
      const newProduct=await db.inventory.create({data:req.body}) 
      return res.status(200).json({success:true,message:"Product added successfully",Product:newProduct})
   }catch(err){
    return res.status(500).json({success:false,message:err.message});
   }
}

export const removeProduct=async(req,res)=>{
    const {id}=req.params;
   
   try{
     const deletedProduct = await db.inventory.delete({where:{productId:Number(id),userId:req.userId}})
     return res.status(200).json({success:true,message:"Product deleted successfully",Product:deletedProduct})
   }catch(err){
    return res.status(500).json({success:false,message:err.message});
   }
}

export const updateProduct=async(req,res)=>{
  try{
    req.body.totalValue=req.body.price*req.body.quantity;
    const updatedProduct=await db.inventory.update({where:{productId:req.body.productId},data:req.body})
    return res.status(200).json({success:true,message:"Product updated successfully",updatedProduct})
  }catch(err){
    return res.status(500).json({success:false,message:err.message});
  }
}