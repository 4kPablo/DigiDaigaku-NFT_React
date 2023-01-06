import './style.scss';
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Social() {
  document.title = "Digi-Daigaku REACT";
  return (
    <div className="Social">
      <div className="social-icons">
        <a href="https://twitter.com/digidaigaku">
          <FaTwitter className='icon' />
        </a>
        <a href="https://discord.gg/qHqsDJMTha">
          <FaDiscord className='icon' />
        </a>
      </div>

      <div className="social-text">
        <p>Únete a la comunidad</p>
      </div>
    </div>
  );
}

export default Social;