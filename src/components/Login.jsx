import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alerta } from './Alerta'
import '../style-sheets/components/Registro-Login.css'

export function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const {login, resetPassword} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [displayMensaje, setDisplayMensaje] = useState();

    const handleOnChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    const handleResetPassword = async () => {
        setError("");
        setDisplayMensaje("");
        if(!user.email) return setError("Por favor ingresa tu mail");
        resetPassword(user.email, user.password)
            .then((userCredential) => {
                setDisplayMensaje("Se te ha enviado un email para reiniciar tu contraseña");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setDisplayMensaje("");
        login(user.email, user.password)
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
            {displayMensaje && <Alerta message={displayMensaje} tipo="correcto" />}

            <form className='login-register__form' onSubmit={handleOnSubmit}>
                <p className='login-register__title'>Bienvenido!</p>
                <p className='login-register__subtitle'>Completa los datos para iniciar sesion.</p>
                <div className='login-register__input-container'>
                    <input className='login-register__input' type="email" name="email" placeholder="Ingresa tu correo electronico" onChange={handleOnChange} />
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className='login-register__input-container'>
                    <input className='login-register__input' type="password" name="password" placeholder="Ingresa tu contraseña" onChange={handleOnChange} />
                    <i className="fa-solid fa-lock"></i>
                </div>
                <div className='login-register__btn-container'>
                    <button className='login-register__btn btn'>Iniciar Sesion</button>
                    <a href="#!" className='login__password-reset' onClick={handleResetPassword}>Olvidaste tu contraseña?</a>
                </div>
            </form>

            <p className='login-register__redirect'>Aun no tienes una cuenta? <Link to="/registro">Registrate</Link></p>
        </div>
    )
}