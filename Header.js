import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Эко Бизнес</h1>
      <nav>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#products">Продукты</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
