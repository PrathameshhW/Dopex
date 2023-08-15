import React from "react";
import "./Footer.css";

const Footer = () => {
  const footer = [
    {
      heading: "Product",
      link: ["Use", "Dopex"],
    },
    {
      heading: "Learn",
      link: ["Documentation", "Blog", "Knowledge", "Base"],
    },
    {
      heading: "Community",
      link: ["Discord", "Twitter"],
    },
    {
      heading: "Developers",
      link: ["Github", "Bug", "Bounty"],
    },
    {
      heading: "Other",
      link: ["Sale"],
    },
  ];
  return (
    <section className="f-wrapper">
      <div className="flexRowStart innerWidth paddings f-container">
        <div className="flexColStart f-headings">
          <img src="./logo.svg" alt="" width={38} />
          <span className="secondaryText">© 2023 Dopex</span>
        </div>

        <div className="flexRowStart f-links">
          {footer.map((data, i) => (
            <div className="flexColStart" key={i}>
              <span className="whiteText">{data.heading}</span>
              {data.link.map((link, j) => (
                <span className="secondaryText" key={j}>
                  {link}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
