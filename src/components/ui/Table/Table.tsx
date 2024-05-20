import useCartContext from '../../../hooks/useCartContext'
import { CardProductI } from '../../../interface'
import styles from './Table.module.css'

export const Table = () => {

    const { state: { cartItems }, dispatch } = useCartContext()

    const removeCart = (item: CardProductI) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }

    const addCart = (item: CardProductI) => {
        dispatch({ type: "ADD_TO_CART", payload: item })
    }

    const totalPay = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
        return total;

    }

    return (
        <>
            <table className={styles.modalTable}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Delet</th>
                        <th>Quantity</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>
                                <button className={styles.modalButtonRemove} onClick={() => { removeCart(product) }}>-1</button>
                            </td>
                            <td>{product.quantity}</td>
                            <td>
                                <button className={styles.modalButtonAdd} onClick={() => { addCart(product) }}>+1</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div >
                <h3 className={styles.modalTotalContainer}>Total: ${totalPay()}</h3>
            </div>
        </>
    )
}
