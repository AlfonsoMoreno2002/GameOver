import React, { useState } from 'react';
import './Cliente.css';

const ClienteCard = ({nombre, apellido, email, telefono, direccion }) => {
    
    return (
    <div className="cripto">
        
      <h2>{`${nombre} ${apellido}`}</h2>
      <div className="info">
        <p>
          <span className="label">Email: </span>
          {email}
        </p>
        <p>
          <span className="label">Teléfono: </span>
          {telefono}    
        </p>
        <p>
          <span className="label">Dirección: </span>
          {direccion}
        </p>
      </div>
    </div>
  );
};

export default ClienteCard;
