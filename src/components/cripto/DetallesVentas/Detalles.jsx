import React from 'react';
import './DetaVen.css'; // Asegúrate de importar tu hoja de estilos

const DetaVentaCard = ({ id, venta_id, producto_id, cantidad, precio_unitario }) => {
  return (
    <div className="venta">
      <h2>Venta ID: {venta_id}</h2>
      <div className="info">
        <p>
          <span className="label">ID: </span>
          {id}
        </p>
        <p>
          <span className="label">Producto ID: </span>
          {producto_id}
        </p>
        <p>
          <span className="label">Cantidad: </span>
          {cantidad}
        </p>
        <p>
          <span className="label">Precio Unitario: </span>
          {parseFloat(precio_unitario).toFixed(2)} {/* Formatea el precio a dos decimales */}
        </p>
      </div>
    </div>
  );
};

export default DetaVentaCard;
