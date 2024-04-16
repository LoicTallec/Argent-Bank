import React from "react";
import features from "../../data/features.json";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import iconChat from "../../assets/icon-chat.webp";
import iconMoney from "../../assets/icon-money.webp";
import iconSecurity from "../../assets/icon-security.webp";
import texts from "../../data/dataText.json";
import "./home.css";

function Home() {
  const imageFeature = {
    "icon-chat.webp": iconChat,
    "icon-money.webp": iconMoney,
    "icon-security.webp": iconSecurity
  }

  return (
    <main>
      <Banner
        titleOne={texts.titleOne} 
        titleTwo={texts.titleTwo}
        text={texts.text} 
        alt={texts.alt} 
      />
      <section className="features">
        {features.map((feature) => (
          <Feature
            key={feature.title}
            image={imageFeature[feature.image]}
            alt={feature.alt}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
