import React from 'react';
import '../info/criptoInfo.css'

const CriptoInfo = ({ cripto }) => {
  // Asegurémonos de que cripto es un objeto antes de intentar acceder a sus propiedades
  if (!cripto || !cripto[0]) {
    console.error("Error: Datos de cripto no disponibles");
    return null;
  }

  const criptoData = cripto[0]; // Accede al primer objeto en el array  

  return (
    <div className="info">
      <div className="main-info">
        <span>ID: {criptoData.producto_id}</span>
        <h1>{criptoData.nombre}</h1>
      </div>
      <div className="details">
        <ul>
          <li className="crypto-image">
          <img src={'https://m.media-amazon.com/images/I/916T5H6sCtL.jpg'}
          alt={""}
          className="crypto-image"
        />
          </li>
          <li className="detail">
            <span className="label">Descripción:</span>
            <span>{criptoData.descripcion}</span>
          </li>
          <li className="detail">
            <span className="label">Precio:</span>
            <span>{parseFloat(criptoData.precio).toFixed(2)}</span>
          </li>
          <li className="detail">
            <span className="label">Stock:</span>
            <span>{criptoData.stock}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CriptoInfo;
