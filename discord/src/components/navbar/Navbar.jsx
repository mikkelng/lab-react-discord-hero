import "./Navbar.css";
import discordlogo from "../../assets/discord-logo-white.png";
import menu from "../../assets/menu-icon.png";

function Navbar() {
  return (
 
      <nav>
        <div className="logo-container">
          <img src={discordlogo} alt="Logo" className="logo" />
        </div>
        <div className="menu-container">
          <img src={menu} alt="menu" className="menu-icon" />
        </div>
      </nav>
  );
}

export default Navbar;