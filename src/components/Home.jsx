import '../style-sheets/components/Home.css';
import '../style-sheets/utils.css';
import { Producto } from './Producto'
import { productos } from '../dataProductos';

export function Home() {
    return( 
        <div className='home container'>
            <h1 className='home__title'>Explora nuestro catalogo!</h1>
            {productos.map((producto) =>
                <Producto id={producto.id} mostrarBotonDetalle={true}/> 
            )}
        </div>
    )
}