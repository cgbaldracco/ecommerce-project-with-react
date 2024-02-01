import '../style-sheets/components/Producto.css';
import { useNavigate } from 'react-router-dom';
import { productos } from '../dataProductos';

export function Producto({ id, mostrarBotonDetalle }){

	const navigate = useNavigate();

	const datosProducto = productos.find((producto) => id == producto.id);

	const handleDetalle = () => {
		navigate(`/detalle/${id}`);
	};

	return(
		<div className='producto__container'>
			<div className='producto__content'>
				<div className='content__primaryColor'>
					<p>Nombre del Producto: {datosProducto.nombre}</p>
				</div>
				<div className='content__secondaryColor'>
					<p>Descripcion del Producto: {datosProducto.descripcion}</p>
				</div>
				<div className='content__primaryColor'>
					<p>Precio del Producto: {datosProducto.precio}</p>
				</div>
				<div className='content__secondaryColor'>
					<p>SKU: {datosProducto.sku}</p>
				</div>
				{mostrarBotonDetalle && 
					<div className='producto__btnContainer'>
						<button className='producto__btn btn' onClick={handleDetalle}>Detalles del producto</button>
					</div>
				}
			</div>
			<div className='producto__img-container'>
			<img 
                className='producto__img'
                src={require(`../imagenes/producto-imagen-${datosProducto.id}.png`)}
                alt={`Foto de ${datosProducto.nombre}`} />
			</div>
		</div>
	);
}