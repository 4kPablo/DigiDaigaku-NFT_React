import '../styles/main.scss';
import '../styles/nav.scss';
import logo from "../img/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  return (
    <div className="Nav">
      <a href="index.html">
        <img src={logo} className="nav-item" alt="logo" />
      </a>

      <div className="search-bar">
        <label className="search-bar__icon" for="search">
          <HiOutlineSearch />
        </label>
        <label for="search-bar--selected">
          <input
            className="search-bar__input"
            id="search"
            type="text"
            placeholder="Buscar por nombre"
          />
        </label>
      </div>

      <ul className="nav-item nav-links">
        <li>
          <a href="./store.html">Tienda</a>
        </li>
        <li>
          <a href="#" className="carrito-nav-link1">
            Carrito
          </a>
        </li>
        <li>
          <a href="#" className="loguearse-nav-link1">
            Logearse
          </a>
        </li>
      </ul>

      <GiHamburgerMenu className="nav-item burger-icon" />

      <div className="burger-menu-panel hidden">
        <div className="burger-menu">
          <li>
            <a href="./store.html">Tienda</a>
          </li>
          <li>
            <a href="#" className="carrito-nav-link2">
              Carrito
            </a>
          </li>
          <li>
            <a href="#" className="loguearse-nav-link2">
              Logearse
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
