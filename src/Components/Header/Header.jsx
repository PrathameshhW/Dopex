import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <div className="flexCenter h-logo">
            <a href="http://localhost:5173/">
              <img src="./logo.svg" alt="" width={38} />
            </a>
            <a href="http://localhost:5173/" className="whiteText">
              DOPEX
            </a>
          </div>
          <div className="flexCenter secondaryText h-menu">
            <a href="http://localhost:5173/">Home</a>
            <a href="https://docs.dopex.io/">Learn</a>
            <a href="https://twitter.com/dopex_io" target="_blanks">
              Community
            </a>
            <a href="https://github.com/dopex-io" target="_blank">
              Developers
            </a>

            <button className="button">Use Dopex</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
