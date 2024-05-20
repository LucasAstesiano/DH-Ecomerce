import { CardProductI } from "../interface"


export const initialState = {
    cartItems:[],
}

export interface CartState{
    cartItems:CardProductI[]
}

export interface CartAction{
    type: "ADD_TO_CART"| "REMOVE_FROM_CART"|"CLEAR_CART"
    payload: CardProductI
}

export const cartReducer = (state:CartState,action:CartAction):CartState=>{
    switch (action.type){
        case "ADD_TO_CART": {
            const {id} = action.payload
            //Validar si el item ya existe en el carrito, true o false
            const existingItem = state.cartItems.find((item)=>item.id ===id)
            
            if (existingItem) {
                return {
                    ...state,cartItems:state.cartItems.map((item)=> item.id ===id ? {...existingItem,quantity: existingItem.quantity +1} : item)
                }
            } else {
                return{
                ...state,cartItems:[...state.cartItems, action.payload]
            }
        }
        }
        case "REMOVE_FROM_CART":{
            const {id:removeItemId} =action.payload

            //VALIDAR SI EL ITEM YA EXISTE EN EL CARRITO

            const itemToRemove = state.cartItems.find((item) => item.id === removeItemId)

           if (itemToRemove) {
            if (itemToRemove.quantity === 1) {
                return{
                    ...state,cartItems: state.cartItems.filter((item)=>item.id !== removeItemId)
                }
                
            } else {
                return {
                    ...state,cartItems:state.cartItems.map((item)=>item.id === removeItemId ? {...itemToRemove,quantity:itemToRemove.quantity -1}:item)
                }
            }
           }else{
                return state;
           }
            
        }
        case "CLEAR_CART":{
            return {...state,
                cartItems: []}
        }
        default:
            return state

    }
}