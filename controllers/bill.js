import { db } from "../db connection.js";

export const getAllBills=async(req,res)=>{
   try{
        const allBills=await db.bills.findMany();
        return res.status(200).json(allBills)
   }catch(err){
    return res.status(500).json({success:false,message:err.message});
   }
}

export const getSingleBill=async(req,res)=>{
     const {id}=req.params;
    try{
        const bill=await db.bills.findUnique({where:{billId:Number(id)}})
        return res.status(200).json(bill);
    }catch(err){
     return res.status(500).json({success:false,message:err.message});
    }
}

export const addBill=async(req,res)=>{
   
    const {productId,numberofproduct} = req.body
    try{
         const product=await db.inventory.findUnique({where:{productId:productId}})
       
         if(!product) return res.status(404).json("We don't have any product associated with the given product ID");
         if(product.quantity==0) return res.json("We are sorry, This product is out of stock")
         if(numberofproduct>product.quantity) return res.json(`We have only ${product.quantity} left in our stock`)

         const Bill={
         productName:product.name,
         price:product.price,
         numberOfProducts:numberofproduct,
         totalAmount:numberofproduct*product.price,
         productId:product.productId,
         customerId:req.userId
        }
      
        product.quantity=product.quantity-numberofproduct;
        await db.inventory.update({where:{productId:product.productId},data:{quantity:product.quantity,totalValue:product.quantity*product.price}});
       
        const newBill=await db.bills.create({data:Bill});
        return res.status(200).json({success:true,message:"Bill created successfully",newBill})
    }catch(err){
        return res.status(500).json({success:false,message:err.message})
    }
}

export const removeBill=async(req,res)=>{
    const {id}=req.params;
   try{
     const deletedBill=await db.bills.delete({where:{billId:Number(id)}});
     return res.status(200).json({success:true,message:"Bill has been deleted successfully",deletedBill})
   }catch(err){
    return res.status(500).json({success:false,message:err.message});
   }
}

export const updateBill=async(req,res)=>{
    try{
       const updatedBill = await db.bills.update({where:{billId:req.body.billId},data:req.body});
       return res.status(200).json({success:true,message:"Bill updated successfully",updatedBill})
    }catch(err){
        return res.status(500).json({success:false,message:err.message});
    }
}