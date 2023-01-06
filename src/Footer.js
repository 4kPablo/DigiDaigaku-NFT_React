import './style.scss';

function Footer() {
  document.title = "Digi-Daigaku REACT";
  return (
    <footer className="footer-container">
      <p className="footer-item">© 2022 - 2022 Asdsf Networks, Inc</p>
      <div className="footer-item">
        <a href="#">Política de privacidad</a>
        <a href="#">Términos de servicio</a>
      </div>
    </footer>
  );
}

export default Footer;