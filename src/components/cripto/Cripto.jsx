import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cripto.css';

const Cripto = ({ producto_id, nombre, descripcion, precio, stock, imagen }) => {
  const [carrito, setCarrito] = useState([]);
  const [imagenProducto, setImagenProducto] = useState('');

  useEffect(() => {
    // Obtener la imagen del producto desde la API
    fetch(imagen)
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImagenProducto(imageUrl);
      })
      .catch(error => console.error('Error al obtener la imagen:', error));
  }, [imagen]);

  const agregarAlCarrito = () => {
    // Agregar la criptomoneda al carrito (puedes hacer más lógica aquí según tus necesidades)
    const nuevaCriptoEnCarrito = {
      producto_id,
      nombre,
      precio,
    };
    console.log(nuevaCriptoEnCarrito);
    setCarrito([...carrito, nuevaCriptoEnCarrito]);
    // Mostrar la alerta (opcional)
    alert('Agregado al carrito con éxito');
  };

  const comprar = () => {
    window.location.href = 'http://localhost:3000/';
  };

  return (  
    <div className="cripto">
      <Link to={`/criptomonedas/${producto_id}`}>
        <h2>{nombre}</h2>
      </Link>
      <div className="info">
        <img
          src={imagenProducto}
          alt={nombre}
          className="crypto-image"
        />
        <p>
          <span className="label">Descripción: </span>
          {descripcion}
        </p>
        <p>
          <span className="label">Precio: </span>
          {parseFloat(precio).toFixed(2)}
        </p>
        <p>
          <span className="label">Stock: </span>
          {stock}
        </p>
        <button className="comprar-button" onClick={comprar}>
          Comprar
        </button>
        <button className="comprar-button2" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Cripto;
