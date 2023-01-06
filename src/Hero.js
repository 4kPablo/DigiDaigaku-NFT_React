import './style.scss';
import 'animate.css';
import topBar from "./img/top-bar.png";
import logo from "./img/logo.png";
import nftScreenshot from "./img/nft-screenshot.png";
import bottomBar from "./img/bottom-bar.png";
import { FaEthereum } from "react-icons/fa";


function Hero() {
  document.title = "Digi-Daigaku REACT";
  return (
    <div className="Landing">
      <div className="hero">
        <img className="top-bar" src={topBar} />
        <img className="hero-logo animate__animated animate__fadeInDownBig" src={logo} />
        <div className="hero-section">
          <div className="hero-left">

            <h1>DigiDaigaku Genesis</h1>
            <h2>DigiDaigaku es una colección de 2022 personajes únicos desarrollados por Limit Break, una
              compañía fundada por Gabriel Leydon y Halbert Nakagawa. <br />
              Actualmente, los personajes DigiDaigaku viven en un lugar misterioso para los forasteros, pero
              eventualmente, más detalles
              sobre su mundo serán revelados.
            </h2>

            <div className="ether-stats">
              <div className="total-volume">
                <FaEthereum />
                <b>7,6k</b>
                <p>Volumen total</p>
              </div>

              <div className="floor-price">
                <FaEthereum />
                <b>13,88</b>
                <p>Precio mínimo</p>
              </div>

              <div className="best-offer">
                <FaEthereum />
                <b>10,18</b>
                <p>Mejor oferta</p>
              </div>

              <div className="listed">
                <b>3%</b>
                <p>Listado</p>
              </div>

              <div className="unique-owners">
                <b>24%</b>
                <p>Dueños únicos</p>
              </div>

            </div>
          </div>
          <div className="hero-right">
            <img src={nftScreenshot} />
          </div>
        </div>
      </div>
      <img className="bottom-bar_img" src={bottomBar} />

      {/* <div className="super-container2">

        <div className="social">
          <div className="social-icons">
            <a href="https://twitter.com/digidaigaku"><i className="fa-brands fa-twitter fa-2xl"></i></a>
            <a href="https://discord.gg/qHqsDJMTha"><i className="fa-brands fa-discord fa-2xl"></i></a>
          </div>

          <div className="social-text">
            <p>Únete a la comunidad</p>
          </div>
        </div>

        <footer className="footer-container">
          <p className="footer-item">© 2022 - 2022 Asdsf Networks, Inc</p>
          <div className="footer-item">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos de servicio</a>
          </div>
        </footer>

      </div> */}
    </div>
  );
}

export default Hero;