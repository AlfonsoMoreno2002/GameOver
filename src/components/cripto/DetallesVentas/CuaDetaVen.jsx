import React from 'react';
import './CuaDetaVen.css'; // Asegúrate de importar tu hoja de estilos
import DetaVentaCard from './Detalles.jsx'; // Asegúrate de importar el componente correcto
import useConsulta from '../../../hooks/useConsulta.js'; // Asegúrate de importar el hook correcto

function CuadriculaDetaVentas() {
  const [ventas] = useConsulta('detalleventas');
  console.log(ventas);

  if (!ventas) return <span>Cargando Datos....</span>;

  return (
    <div className="app-container">
      <h1>Lista de Ventas</h1>
      <div className="venta-conta">
        {ventas.map(({ id, venta_id, producto_id, cantidad, precio_unitario }) => (
          <DetaVentaCard
            key={id}
            id={id}
            venta_id={venta_id}
            producto_id={producto_id}
            cantidad={cantidad}
            precio_unitario={precio_unitario}
          />
        ))}
      </div>
    </div>
  );
}

export default CuadriculaDetaVentas;
