import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(()=>{
        const productRef = doc(db, "products", productId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = {id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
            
            
    }, [productId])

    if(loading){
        return(
            <div className="Cargando">
                <h1>Cargando...</h1>
            </div>
        )

    }

    
    return( 
        <div className="Saludo">
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer