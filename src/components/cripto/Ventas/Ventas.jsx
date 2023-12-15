import React from 'react';
import './Ventas.css'; // Asegúrate de importar tu hoja de estilos

const VentaCard = ({ venta_id, cliente_id, fecha_venta }) => {
  return (
    <div className="venta">
      <center><h2>Venta ID: {venta_id}</h2></center>
      <div className="info">
        <p>
          <span className="label">Cliente ID: </span>
          {cliente_id}
        </p>
        <p>
          <span className="label">Fecha de Venta: </span>
          {new Date(fecha_venta).toLocaleDateString()} {/* Convierte la fecha a un formato legible */}
        </p>
      </div>
    </div>
  );
};

export default VentaCard;
