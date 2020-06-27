import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src='pic/cat.png' />
    </header>
  );
};

export default Header