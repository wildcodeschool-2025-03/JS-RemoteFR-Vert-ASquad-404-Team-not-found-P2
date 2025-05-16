import "./footer.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import x_twitter from "../../assets/images/x_twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="iconesReseaux">
        <img src={facebook} alt="lien facebook" />
        <img src={x_twitter} alt="lien x twitter" />
        <img src={instagram} alt="lien instagram" />
      </div>
      <p>404 Team not found</p>
    </footer>
  );
}
export default Footer;
