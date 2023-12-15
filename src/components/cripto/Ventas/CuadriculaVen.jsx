import React from 'react';
import './CuadriculaVen.css'; // Asegúrate de importar tu hoja de estilos
import VentaCard from './Ventas.jsx'; // Asegúrate de importar el componente correcto
import useConsulta from '../../../hooks/useConsulta.js'; // Asegúrate de importar el hook correcto

function CuadriculaVentas() {
  const [ventas] = useConsulta('ventas');
  console.log(ventas);

  if (!ventas) return <span>Cargando Datos....</span>;

  return (
    <div className="app-container">
      <h1>Lista de Ventas</h1>
      <div className="venta-container">
        {ventas.map(({ venta_id, cliente_id, fecha_venta }) => (
          <VentaCard
            key={venta_id}
            venta_id={venta_id}
            cliente_id={cliente_id}
            fecha_venta={fecha_venta}
          />
        ))}
      </div>
    </div>
  );
}

export default CuadriculaVentas;
