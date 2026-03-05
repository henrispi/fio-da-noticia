import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h1>Fio da notícia</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#tecnologia">Tecnologia</a></li>
            <li><a href="#economia">Economia</a></li>
            <li><a href="#esportes">Esportes</a></li>
            <li><a href="#saude">Saúde</a></li>
            {/* Link do Admin removido */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;