import { useParams } from 'react-router-dom';
import { productos } from '../dataProductos';
import '../style-sheets/components/Compra.css'

export function Compra() {
    const { id } = useParams();
    const datosProducto = productos.find((producto) => id == producto.id);

    const confirmarCompra = () => {
        alert('Gracias por su compra');
    }

    return (
        <div className='compra__container container'>
            <h1 className='compra__title'>Detalles de la compra</h1>
            <div className='compra__details-container container'>
                <p className='compra__details'>Nombre: {datosProducto.nombre}</p>
                <p className='compra__details'>Precio: {datosProducto.precio}</p>
                <p className='compra__details'>SKU: {datosProducto.sku}</p>
            </div>
            <button className='compra__btn btn' onClick={confirmarCompra}>Confirmar Compra</button>
        </div>
    )
}