import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import '../style-sheets/components/Layout.css';

export const Layout = () => {

  const {user, logout} = useAuth();
    
  const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.log(error.message);
      }
  }

  if(!user) { return(
    <>
      <header className='header container'>
        <p className='header__logo'>Ecommerce Project</p>
        <nav>
          <ul className='header__menu'>
            <li>
              <Link to='/' className='header__link'>Home</Link>
            </li>
            <li>
              <Link to='/login' className='header__link'>Iniciar Sesion</Link>
            </li>
            <li>
              <Link to='/registro' className='header__link'>Registrarme</Link>
            </li>
          </ul>
        </nav>
        <button className="header__bars">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" >
              <path 
                fill-rule="evenodd" 
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                clip-rule="evenodd" />
            </svg>
        </button>
      </header>

      <Outlet />
    </>
  )} else { return(
      <>
        <header className='header container'>
          <p className='header__logo'>Ecommerce Project</p>
          <nav>
            <ul className='header__menu'>
              <li>
                <Link to='/' className='header__link'>Home</Link>
              </li>
              <li onClick={handleLogout}>
                <Link to='/' className='header__link'>Cerrar Sesion</Link>
              </li>
            </ul>
          </nav>
          <button className="header__bars">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" >
                <path 
                  fill-rule="evenodd" 
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                  clip-rule="evenodd" />
              </svg>
          </button>
        </header>

        <Outlet />
      </>
  )};
};