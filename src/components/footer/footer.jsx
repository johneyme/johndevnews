import "./footer.scss";
//import { HashLink as Link } from 'react-router-hash-link';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import react from "../../assets/react.png";
import sass from "../../assets/sass.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={github} alt="github"></img>
      <img src={linkedin} alt="linkedin"></img>
      <img src={react} alt="react"></img>
      <img src={sass} alt="sass"></img>
    </footer>
  );
}

export default Footer;
