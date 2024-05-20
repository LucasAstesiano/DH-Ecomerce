import Logo from "../../../assets/logo.svg"
import Cart from "../../../assets/cart.svg"
import styles from './Navbar.module.css'
import { useContext, useState } from "react"
import { CartModal } from "../CartModal"
import { CartContext } from "../../../context/CartContext"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
const [showCartModal,setShowCartModal]=useState(false)

const navigate=useNavigate()

const handleNavigate=()=>{
  navigate('/')
}

const handleShowCartModal=()=>{
  setShowCartModal(!showCartModal)
}

const {state} =useContext(CartContext)


  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail}>
            <img src={Logo} alt="Logo" width={50} height={50} onClick={handleNavigate}/>
            <div>
                <span>DH Ecomerce</span>
            </div>
        </div>
        <div className={styles.navbarCartContainer}>
            <p className={styles.navbarTextAmoun}>{state.cartItems.length}</p>
            <img src={Cart} alt="Cart" onClick={handleShowCartModal}/>
        </div>
        {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)}
    </div>
  )
}
