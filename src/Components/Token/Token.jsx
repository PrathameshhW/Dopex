import React from "react";
import "./Token.css";
const Token = () => {
  const token = [
    {
      image: "./DPXtoken.svg",
      heading: "DPX",
      subheading1: "DPX is the limited supply governance token.",
      subheading2:
        "It accrues fees and revenue from pools, vaults and wrappers.",
    },
    {
      image: "./rDPXtoken.svg",
      heading: "rDPX",
      subheading1: "rDPX is the rebate token for option writers.",
      subheading2: "A ton of other utility will be introduced for rDPX",
    },
  ];
  return (
    <>
      <section className="t-wrapper">
        <div className="flexRowCenter innerWidth paddings t-container">
          <div className="t-headings  flexColStart ">
            <span className="gradientText">SYNERGY</span>
            <span className="primaryHeading whiteText">DUAL TOKEN MODEL</span>
            <span className="secondaryText">
              Dopex utilizes two separate tokens to coordinate new ecosystem
              dynamics in a synergistic feedback loop.
            </span>
            <span className="whiteText flexCenter">
              <a href="https://docs.dopex.io/tokenomics/token-distribution">
                <h3>Tokenomics⟶</h3>
              </a>
            </span>
          </div>

          <div className="tokens flexRowCenter">
            {token.map((data, i) => (
              <div className="token paddings flexColStart" key={i}>
                <img src={data.image} alt={`Token Image ${i}`} />
                <span className="whiteText">
                  <h2>{data.heading}</h2>
                </span>
                <span className="secondaryText">{data.subheading1}</span>
                <span className="secondaryText">{data.subheading2}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Token;
