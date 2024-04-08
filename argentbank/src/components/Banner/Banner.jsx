import dataText from "../../data/dataText.json";
import bannerImg from "../../assets/bank-tree.webp";
import "./banner.css";

function Banner() {

  const { titleOne, titleTwo, text } = dataText[0];

  return (
    <figure className="banner">
      <img src={bannerImg} alt="pièces de monnais dans un verre" />
      <figcaption>
        <p className="title">{titleOne}</p>
        <p className="title">{titleTwo}</p>
        <p className="text">{text}</p>
      </figcaption>
    </figure>
  )
}

export default Banner;
