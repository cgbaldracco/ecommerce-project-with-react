import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alerta } from './Alerta'
import '../style-sheets/components/Registro-Login.css'

export function Registro() {

    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
    });

    const {signUp} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [displayMensaje, setDisplayMensaje] = useState();

    const handleOnChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setDisplayMensaje("");
        signUp(user.email, user.password)
            .then((userCredential) => {
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <div className='login-register__container container'>
            {error && <Alerta message={error} tipo="error" />}
            
            <form className='login-register__form' onSubmit={handleOnSubmit}>
                <p className='login-register__title'>Bienvenido!</p>
                <p className='login-register__subtitle'>Completa los datos para registrarte.</p>
                <div className='login-register__input-container'>
                    <input className='login-register__input' type="text" name="nombre" placeholder="Ingresa tu nombre" onChange={handleOnChange} />              
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className='login-register__input-container'>
                    <input className='login-register__input' type="text" name="apellido" placeholder="Ingresa tu apellido" onChange={handleOnChange} />
                    <i className="fa-solid fa-user"></i>                
                </div>
                <div className='login-register__input-container'>
                    <input className='login-register__input' type="email" name="email" placeholder="Ingresa tu correo electronico" onChange={handleOnChange} />
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className='login-register__input-container'>
                    <input className='login-register__input' type="password" name="password" placeholder="Ingresa tu contraseña" onChange={handleOnChange} />
                    <i className="fa-solid fa-lock"></i>
                </div>
                <div className='login-register__btn-container'>
                    <button className='login-register__btn btn'>Registrate</button>
                </div>
            </form>
            
            <p className='login-register__redirect'>Ya tienes una cuenta? <Link to="/login">Iniciar Sesion</Link></p>
        </div>
    )
}