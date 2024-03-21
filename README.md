**Welcome to Inventory Management System Backend Api**

*Description:* This is a Backend Server Api of an Inventory management system.

**Step to Setup locally:**

1. Step 1 : clone the repo
    
1. Step 2 : Run this command ```npm install```
1. Step 3 : Create a ```.env``` file.
1. Step 4 : Create a project on supabase and add the URL in ```.env``` ```DATABASE_URL=```
1. Step 5 : Run these command ```npx prisma generate``` and ```npx prisma migrate dev --name init```
1. Step 6 : Run this command to start the server ```npm start```


***Important***
1. To use the endpoints you first need to signup and then signin with username and password because i have implemented JWT for security.
 
**Auth endpoints**

api/auth/signup

api/auth/signin

**Inventory endpoints**

api/inventory : get all the products 

api/inventory/1 : get specific product 

api/inventory/addProduct : Add a product in to Inventory

api/inventory/1  : Remove a Product.

api/inventory/updateProduct  : Update a Product


**Bills endpoints**

api/bill/getallbills : Get all the tansaction bills

api/bill/1 : Get a specific bill.

api/bill/addbill : create a bill.

api/bill/removebill/1 : Remove specific bill.

api/updatebill : Update a specific bill.

*Live url:*    https://inventory-mangagement-system-backend.onrender.com/
