import img from "../../assets/banner.webp";
import "./banner.css";

function Banner({ titleOne, titleTwo, text, alt }) {

  return (
    <figure className="banner">
      <img src={img} alt={alt} />
      <figcaption>
        <h3 className="title">{titleOne}</h3>
        <h3 className="title">{titleTwo}</h3>
        <p className="text">{text}</p>
      </figcaption>
    </figure>
  )
}

export default Banner;
