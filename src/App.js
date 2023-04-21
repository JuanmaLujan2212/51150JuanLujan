import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext';
import {NotificationProvider } from './notification/NotificationService';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';
import Checkout from './components/Checkout/Checkout';




const App = () => {
  return (
    <div>
      <NotificationProvider>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Todos nuestros productos filtrados por categoria'}/>}/>
                    <Route path='/item/:productId' element={<ItemDetailContainer/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                </Routes>   
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>  
      </NotificationProvider>
    </div>
  )
}

export default App