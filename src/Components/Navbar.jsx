import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={theme === "dark" ? "dark" : ""}>
      <img src="./images/DH.png" alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
