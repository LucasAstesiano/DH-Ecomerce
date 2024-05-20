import { useState } from "react"
import { Hero } from "../../components/ui/Hero/Hero"
import styles from './Home.module.css'
import { CardProduct } from "../../components/ui/CardProduct"
import { getProducts } from "../../service"
import { Toaster } from 'sonner'
import { useQuery } from "react-query"


const Home = () => {

    const [page, setPage] = useState(1)

    const { isLoading, error, data } =
    useQuery({
      queryKey: ['products', page],
      queryFn: () => getProducts(page),
      
    })
    
        


    return (
        <>
            <Hero />
            <Toaster />
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <div className={styles.container}>
            
                {!isLoading && data?.map((product) => (
                    <CardProduct key={product.tail} product={product} />
                ))}
            
            </div>
            <div className={styles.paginationContainer}>
                <button className={styles.paginationButton} onClick={() => setPage(page - 1)} disabled={page === 1} >Previus page</button>
                <div className={styles.pagination}>
                    <span >{page}</span>
                </div>
                <button className={styles.paginationButton} onClick={() => setPage(page + 1)} disabled={data ?  data.length<25 :false }>Next page</button>
            </div>

        </>
    )
}

export default Home