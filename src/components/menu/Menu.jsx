import { NavLink } from "react-router-dom"
import "./Menu.css"
const Menu = ()=>{
    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink> </li>
                <li><NavLink to="/criptomonedas">Juegos</NavLink></li> 
                <li><NavLink to="/clientes">Clientes</NavLink></li> 
                <li><NavLink to="/ventas">Ventas</NavLink></li> 
                <li><NavLink to="/detallesventas">Detalles de ventas</NavLink></li> 
                <li><NavLink to="/Carrito">Carrito</NavLink></li>       
            </ul>
        </nav>

    )
}
export default Menu