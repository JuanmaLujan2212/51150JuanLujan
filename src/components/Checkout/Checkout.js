import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/NotificationService"


const Checkout = () =>{
    const [userData, setUserData] = useState({
        name:'',
        phone:'',
        email:'',
        adress:''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData((prevUserData) => ({ ...prevUserData, [name]: value }))
      }
    
    const handleSubmit = (event) => {
     event.preventDefault() 
     if (userData.name && userData.phone && userData.email && userData.adress) {
         handleConfirm(userData)
      }
    }



    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)

    const { setNotification } = useNotification()
    const {cart, totalPrice, clearCart } = useContext(CartContext)

    const handleConfirm = async (userData) => {
        try{
        setLoading(true)
        const objOrder = {
            buyer: {
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                adress: userData.adress
            },
            items: cart,
            total: totalPrice
        }

        const ids = cart.map(prod => prod.id)

        const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

        const productsAddedFromFirestore = await getDocs(productRef)

        const { docs } = productsAddedFromFirestore

        const batch = writeBatch(db)
        const outOfStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({ id: doc, ...dataDoc})
            }
        })

        if (outOfStock.length === 0){
            batch.commit()

            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            setOrderId(orderAdded.id)
            clearCart()
        }else{
            setNotification('error', "Hay productos que no tienen stock disponible")
        }
    } catch (error){
        setNotification('error', "Hubo un error generando su orden, intentelo mas tarde")
    } finally {
        setLoading(false)
    }
} 

    if (loading){
        return <h1 className="Cargando">Se esta generando su orden...</h1>
    }

    return ( 
    <div>
    { orderId ? 
    <div>
        <h2 className="Cargando" >El id de su orden es: {orderId}</h2> 
    </div>

    : 
    
    <div>
            <form className="formulario" onSubmit={handleSubmit}>
            <h1>Checkout</h1>
            <div className="contenedor">
                <div className="input-contenedor">
                    <input type="text" name="name" placeholder="Nombre" value={userData.name} onChange={handleChange} />
                </div>

                <div className="input-contenedor">
                    <input type="tel" name="phone" placeholder="Telefono" value={userData.phone} onChange={handleChange} />
                </div>
                
                <div className="input-contenedor">
                   <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
                </div>

                <div className="input-contenedor">
                    <input name="adress" placeholder="Direccion" value={userData.adress} onChange={handleChange} />
                </div>
                <button type="submit" className="Mainboton"> Generar orden </button>
            </div>    
            </form>
    </div> } 
    </div>
    )   
     
}

export default Checkout


