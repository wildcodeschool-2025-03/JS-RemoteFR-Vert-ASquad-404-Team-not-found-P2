import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <img
        className="logo"
        src="../../src/assets/images/Astralis-svg-Final.svg"
        alt="logo planete astralis"
      />
      <p className="astralis">Astralis</p>
      <ul>
        <li>Home</li>
        <li>Système Solaire</li>
        <li>Evénements</li>
      </ul>
    </nav>
  );
}
export default Navbar;
