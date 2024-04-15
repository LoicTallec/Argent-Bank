import img from "../../assets/banner.webp";
import "./banner.css";

function Banner({ title, text, alt }) {

  return (
    <figure className="banner">
      <img src={img} alt={alt} />
      <figcaption>
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </figcaption>
    </figure>
  )
}

export default Banner;
