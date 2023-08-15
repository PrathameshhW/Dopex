import React from "react";
import "./Partner.css";

const Partner = () => {
  const images = [
    {
      image: "./orca_traders.png",
    },
    {
      image: "./pattern.png",
    },
    {
      image: "./debase.svg",
    },
    {
      image: "./hardwood_orcz.svg",
    },
    {
      image: "./dcv.png",
    },
  ];
  return (
    <>
      <div className="p-wrapper">
        <div className="flexColCenter innerWidth paddings p-container">
          <span className="gradientText">Inverstors & Partners</span>
          <div className="paddings p-images">
            <span className="primaryHeading">TΞtranodΞ</span>
            <span className="primaryHeading">DefiGod</span>
            {images.map((data, i) => (
              <img
                src={data.image}
                alt={`Partner ${i}`}
                width={250}
                className="image"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
