import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Registro } from './components/Registro';
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './components/ProtectedRoute';
import { Detalle } from './components/Detalle';
import { Compra } from './components/Compra'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='registro' element={<Registro />} />
          <Route path='/detalle/:id' element={
            <ProtectedRoute>
              <Detalle />
            </ProtectedRoute>
          } />
          <Route path='detalle/:id/comprar' element={
            <ProtectedRoute>
              <Compra />
            </ProtectedRoute>
          } />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
