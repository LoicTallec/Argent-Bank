import dataText from "../../data/dataText.json";
import "./footer.css";

function Footer() {

  const { footer } = dataText[1];

  return (
    <footer className="footer">
      <p className="footer-text">{footer}</p>
    </footer>
  )
}

export default Footer;
