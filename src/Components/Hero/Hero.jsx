import React from "react";
import "./Hero.css";

const Hero = () => {
  const hero = [
    {
      image: "./vanilla.svg",
      subheading: "VANILLA",
      heading: "SSOV PROTECTIONS",
      message:
        "Provide option liquidity via covered calls  while passively earning diverse sources of yields.",
    },
    {
      image: "./option.svg",
      subheading: "OPTION",
      heading: "LIQUIDITY POOLS",
      message:
        "A platform for option buyers to easily exit & sell their tokenized positions at any time at a discounted rate.",
    },
    {
      image: "./structured.svg",
      subheading: "STRUCTURED",
      heading: "ATLANTIC OPTIONS",
      message:
        "A novel DeFi primitive that aims to improve efficiency by enabling buyers to borrow option collateral.",
    },
  ];

  return (
    <>
      <section className="hero-wrapper">
        <div className="flexColCenter innerwidth paddings hero-container">
          <div className="flexCenter hero-upper">
            <h1>
              <span className="gradientText hero-heading">D</span>
              <span className="whiteText hero-heading">ECENTRALIZED </span>
              <span className="gradientText hero-heading">OP</span>
              <span className="whiteText hero-heading">TIONS </span>
              <span className="gradientText hero-heading">EX</span>
              <span className="whiteText hero-heading">CHANGE</span>
            </h1>
            <span className="secondaryText flexCenter">
              Dopex is a maximum liquidity and minimal exposure options protocol
            </span>
            <div className="flexCenter paddings hero-upper-buttons">
              <button className="button">Use Dopex</button>
              <button>
                <a href="https://docs.dopex.io/">Documentation</a>
              </button>
            </div>
          </div>

          <div className="flexRowCenter innerWidth paddings hero-down">
            {hero.map((card, i) => (
              <div className="flexColCenter hero-card" key={i}>
                <img src={card.image} alt="" width={300} />
                <span className="gradientText">{card.subheading}</span>
                <span className="whiteText">
                  <h2>{card.heading}</h2>
                </span>
                <span className="secondaryText flexCenter">{card.message}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
