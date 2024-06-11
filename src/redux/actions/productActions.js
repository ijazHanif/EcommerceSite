
//create the 3 types of actions ( set , select , remove )products 
import { ActionTypes } from "../contants/action-type"

 export const setProducts = (products)=>{
    return{
          type: ActionTypes.SET_PRODUCTS,
          payload: products                
    };
 };

 export const selectProduct =(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    };
 };

 export const removeProducts = ()=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
 }

