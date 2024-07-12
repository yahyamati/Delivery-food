import userModel from "../models/UserModel.js";


//add item to user cart
const addToCart = async(req,res) =>{
    try {
        const itemId = req.body.itemId;
        const userId = req.body.userId;
        let userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        if (!cartData[itemId]) {

            cartData[itemId] = 1;
            
        }else{

            cartData[itemId] += 1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true , message:"Added To Cart"});

    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"});
    }

    

}

//remove item from user cart
const removeFromCart = async(req,res) =>{
    try {
        const itemId = req.body.itemId;
        const userId = req.body.userId;
        let userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        if (cartData[itemId] === 1) {
            delete cartData[itemId];
            }else{
                cartData[itemId] -= 1;
                }
                await userModel.findByIdAndUpdate(userId,{cartData});
                res.json({success:true , message:"Removed From Cart"});
                } catch (error) {
                    console.log(error)
                    res.json({success:false , message:"Error"});
                    }
  }
        
    


//Fetch item from user cart
const fetchCart = async(req,res) =>{
   try {
    const userId = req.body.userId;
    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    res.json({success:true , cartData});
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"});
        }
        }
   
export {addToCart,removeFromCart,fetchCart};