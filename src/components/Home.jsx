import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Bienvenido a Game Over</h1>
      <p className="subtitle">Conoce los juegos más populares del momento</p>
      <Link to="/criptomonedas" className="link">
        Ver videojuegos
      </Link>
      <div className="gif-container">
        <img src="https://www.yorokobu.es/src/uploads/2019/12/tenor.gif" alt="GIF" className="gif" />
      </div>
    </div>
  );  
};

export default Home;
