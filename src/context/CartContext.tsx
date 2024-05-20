import {Dispatch, createContext} from 'react'
import { CartAction, CartState } from '../reducers/CartReducer'

interface cartContextType{
    state:CartState,
    dispatch:Dispatch<CartAction>;
}

export const CartContext = createContext({}as cartContextType)