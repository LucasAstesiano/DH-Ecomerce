import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import styles from './CardCredit.module.css'
import { toast } from "sonner";
import useCartContext from '../../../hooks/useCartContext';
import { CardProductI } from '../../../interface';

export const CardCredit = () => {

    const [cardData,setCardData]= useState({
        number:'',
        name:'',
        expiry:'',
        cvc:'',
        focused:''
    })

    const {dispatch} = useCartContext()

    const {number,name,expiry,cvc,focused} = cardData

    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCardData({
            ...cardData,
            [e.target.name]:e.target.value
        })
    }

    const handleInputFocus=(e:React.FocusEvent<HTMLInputElement>)=>{
        setCardData({
            ...cardData,
            focused:e.target.name
        })
    }


    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        //validar campos no esten vacios
        
        if ([number,name,expiry,cvc].includes('')) {
            //Mostrar error
            toast.error('All fields are requiere')
            return
        }
        //Limpiar el estado
        setCardData({
            number:'',
            name:'',
            expiry:'',
            cvc:'',
            focused:''
        })

        dispatch({type:"CLEAR_CART",payload:{} as CardProductI})
    }

  return (
    <div className={styles.container}>
        <div>
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused as any}
            />
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="number">Card Number</label>
                <input type="text" name='number' id='number' value={number} onChange={handleInputChange} onFocus={handleInputFocus} />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' value={name} onChange={handleInputChange} onFocus={handleInputFocus} />
            </div>
            {/*Grupo */}
            <div className={styles.formInputGrup}>
                <div className={styles.formControl}>
                    <label htmlFor="expiry">Card Expiry</label>
                    <input type="text" name='expiry' id='expiry' value={expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="cvc">Card cvc</label>
                    <input type="text" name='cvc' id='cvc' value={cvc} onChange={handleInputChange} onFocus={handleInputFocus}/>
                </div>
            </div>
            <button type='submit' className={styles.buyButton} >Buy Now</button>
        </form>
    </div>
  )
}
