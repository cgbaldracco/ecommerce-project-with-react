import { useParams, useNavigate } from 'react-router-dom';
import { Producto } from './Producto';
import '../style-sheets/components/Detalle.css'

export function Detalle() {
    const navigate = useNavigate();
    const { id } = useParams();
    const showDetalle = false;

    const manejarCompra = () => {
        navigate(`/detalle/${id}/comprar`);
    };

    return(
        <div className='detalle__container container'>
            <h1 className='detalle__title'>Aqui le mostraremos el detalle del producto seleccionado</h1>
            <Producto id={id} mostrarBotonDetalle={showDetalle} />
            <button className='detalle__btn btn' onClick={manejarCompra}>Comprar</button>
        </div>
    )
}