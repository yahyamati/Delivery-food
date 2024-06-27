import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const  StoreContext = createContext(null)


const StoreContextProvider = (props) => {

const [cartItem , setCartItem] = useState({});

const addToCart = (itemId) => {
  if(!cartItem[itemId]){ //if the product is not in cart 
    setCartItem((prev) =>({...prev,[itemId]:1})) //add product
  }
  else{
    setCartItem((prev) =>({...prev,[itemId]:prev[itemId]+1})) //if the product is already in cart add the product + the prev prod
  }

}

const removeFromCart=(itemId) =>{
  setCartItem((prev) =>({...prev,[itemId]:prev[itemId]-1})) 
}

const getTotalCartAmount = ()=>{
  let totalAmount=0;
  for (const item in cartItem) {
    if (cartItem[item]>0) {
         let itemInfo = food_list.find((product)=>product._id ===item)
         totalAmount +=itemInfo.price*cartItem[item];
    }
  }
  return totalAmount;
}



    const contextValue = {

      food_list,
      cartItem,
      setCartItem,
      addToCart,
      removeFromCart,
      getTotalCartAmount

    }
    
    return(

    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>



    )
}

export default StoreContextProvider;