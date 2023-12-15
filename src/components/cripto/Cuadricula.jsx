import React from 'react';
import './Cuadricula.css';
import Cripto from './Cripto';
import useConsulta from '../../hooks/useConsulta';

function Cuadricula() {
  const [criptos] = useConsulta('productos');
  if (!criptos) return <span>Cargando Datos....</span>;

  return (
    <div className="app-container">
      <center><h1>Lista de Videojuegos</h1></center>
      <div className="cripto-container">
        {criptos.map(({ producto_id, nombre, descripcion, precio, stock, imagen }) => (
          <Cripto
            key={producto_id}
            producto_id={producto_id}
            nombre={nombre}
            descripcion={descripcion}
            precio={precio}
            stock={stock}
            imagen={imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Cuadricula;
