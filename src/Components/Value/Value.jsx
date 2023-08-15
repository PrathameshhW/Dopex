import React from "react";
import "./Value.css";

const Value = () => {
  const info = [
    {
      image: "./v1.svg",
      heading: "Staking Yield",
      subheading:
        "Your collateral never goes un-used and is put to work by staking in other protocols to earn yields.",
    },
    {
      image: "./v2.svg",
      heading: "Collateral Borrowing",
      subheading:
        "Atlantic options offer buyers with unique products like applying straddle strategies with a fraction of the cost and insuring leveraged longs.",
    },
    {
      image: "./v3.svg",
      heading: "Minimize Risk",
      subheading:
        "Offset risk and minimize losses as a liquidity provider with rDPX rebates, Result: Lower APR with lower risk.",
    },
    {
      image: "./v4.svg",
      heading: "Pricing Efficiency",
      subheading:
        "Our options collateral efficiency gives Dopex a distinct advantage in pricing, allowing for immediate arbitrage opportunities.",
    },
  ];

  return (
    <>
      <section className="whiteText paddings v-wrapper">
        <div className="innerWidth flexColCenter paddings v-container">
          <div className="flexColCenter paddings v-headings">
            <span className="gradientText">BUILT DIFFERENT</span>
            <span className="whiteText primaryHeading">
              DEFI FIRST & POWERFUL OPTIONS
            </span>
            <span className="secondaryText">
              We built a protocol with vast improvements over the existing
              options market.
            </span>
          </div>

          <div className="cards">
            {info.map((data, i) => (
              <div className="card flexRowCenter" key={i}>
                <img src={data.image} alt="" className="flexCenter" />
                <div className="flexColStart">
                  <span className="whiteText">
                    <h3>{data.heading}</h3>
                  </span>
                  <span className="secondaryText">{data.subheading}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
