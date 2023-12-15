import { Link } from 'react-router-dom';
import '../info/Carrito.css'; // Asegúrate de importar tu archivo CSS aquí

const Carrito = () => {
    // Supongamos que tienes un estado llamado 'productosEnCarrito' que contiene la lista de productos agregados al carrito
    const productosEnCarrito = []; // Reemplaza esto con tu lógica real

    return (
        <div className="container">
            <h1>Este es tu carrito de compras</h1>
            {productosEnCarrito.length > 0 ? (
                <div>
                    <h2>Productos en tu carrito:</h2>
                    <ul>
                        {productosEnCarrito.map((producto, index) => (
                            <li key={index}>{producto.nombre} - ${producto.precio}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>
                    Aun no has agregado nada al carrito.
                    Compra algo ahora mismo.
                </p>
            )}
            <center>
                <div className="image-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png" alt="Imagen del producto" />
                </div>
            </center>
            <center>
                    <button className="btn-link">
                        <Link to='/criptomonedas' className="btn-link">Ir a los videojuegos</Link>
                    </button>
            </center>
        </div>
    );
};

export default Carrito;
