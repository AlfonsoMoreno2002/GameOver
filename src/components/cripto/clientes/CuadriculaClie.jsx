import React from 'react';
import './CuadriculaClie.css';
import ClienteCard from './Clientes.jsx'; // Asegúrate de importar el componente correcto
import useConsulta from '../../../hooks/useConsulta.js'; // Asegúrate de importar el hook correcto

function Cuadricula() {
  const [clientes] = useConsulta('clientes');
console.log(clientes);
  if (!clientes) return <span>Cargando Datos....</span>;

  return (
    <div className="app-container">
      <h1>Lista de Clientes</h1>
      <div className="cliente-container">
        {clientes.map(({ cliente_id, nombre, apellido, email, telefono, direccion }) => (
          <ClienteCard
            key={cliente_id}
            nombre={nombre}
            apellido={apellido}
            email={email}
            telefono={telefono}
            direccion={direccion}
          />
        ))}
      </div>
    </div>
  );
}

export default Cuadricula;
