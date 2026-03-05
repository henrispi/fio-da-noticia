import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Fio da notícia. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href="#privacidade">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;