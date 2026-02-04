import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Portal de Notícias</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tecnologia">Tecnologia</a></li>
            <li><a href="#economia">Economia</a></li>
            <li><a href="#esportes">Esportes</a></li>
            <li><a href="#saude">Saúde</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;