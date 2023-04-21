import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useAuth();


    const handleLogin = (e) => {
        e.preventDefault()
        login(username, password)
        console.log(username)
        navigate('/');
    }

    return (
        <div>
            <form className="formulario" id="CheckoutForm" onSubmit={handleLogin}>
            
                <h1>Iniciar sesion</h1>
                <div className="contenedor">
                    <div className="input-contenedor">
                    <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />         
                    </div>     

                    <div className="input-contenedor">
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>    
                    </div>

                    <input type="submit" value="Login" className="button"/>
                </div>
            </form>
        </div>
    )
}

export default Login