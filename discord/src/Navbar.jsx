import "./Navbar.css";
import discordlogo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";

function Navbar() {
  return (
 
      <nav>
        <div>
          <img src={discordlogo} alt="Logo" className="logo" />
        </div>
        <div>
          <img src={menu} alt="menu" className="menu-icon" />
        </div>
      </nav>
  );
}

export default Navbar;