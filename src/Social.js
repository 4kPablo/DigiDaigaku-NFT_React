import './style.scss';
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Social() {
  document.title = "Digi-Daigaku REACT";
  return (
    <div className="Social">
      <div className="social-icons">
        <a href="https://twitter.com/digidaigaku">
          <BsTwitter className='icon' />
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