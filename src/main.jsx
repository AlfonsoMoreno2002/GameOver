import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import "./Main.css"
import Home from './components/Home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Pagina404 from './components/404.jsx'
import Cuadricula from './components/cripto/Cuadricula.jsx'
import CriptoPague from './components/cripto/CriptoPage.jsx'
import Carrito from './components/cripto/info/Carrito.jsx'
import CuadriculaClie from './components/cripto/clientes/CuadriculaClie.jsx'
import CuadriculaVen from './components/cripto/Ventas/CuadriculaVen.jsx'
import CuadriculaDetaVentas from './components/cripto/DetallesVentas/CuaDetaVen.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
            <Routes>
                  <Route path='/' element={<App/>}>
                        <Route index element={<Home/>}/>
                  </Route>

                  <Route path="/criptomonedas" element={<App/>}>
                        <Route index element={<Cuadricula/>}/>
                        <Route path=':id' element={<CriptoPague/>}/>
                  </Route>

                  <Route path="/clientes" element={<App/>}>
                        <Route index element={<CuadriculaClie/>}/>
                  </Route>

                  <Route path="/ventas" element={<App/>}>
                        <Route index element={<CuadriculaVen/>}/>
                  </Route>

                  <Route path="/detallesventas" element={<App/>}>
                        <Route index element={<CuadriculaDetaVentas/>}/>
                  </Route>

                  <Route path="/Carrito" element={<App/>}>
                        <Route index element={<Carrito/>}/>
                  </Route>

                  <Route path='*' element={<Pagina404/>}></Route>
            </Routes>
      </BrowserRouter>
)

