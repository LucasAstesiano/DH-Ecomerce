import { useReducer,FC,ReactNode } from "react"
import { cartReducer, initialState } from "../reducers/CartReducer"
import { CartContext } from "./CartContext"


interface cartProviderProps{
    children:ReactNode
}

export const CartProvider:FC<cartProviderProps> = ({children})=>{
    const [state, dispatch]=useReducer(cartReducer,initialState)

    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}