import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Partner from "./Components/Partner/Partner";
import Token from "./Components/Token/Token";
import Value from "./Components/Value/Value";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Value />
      <Partner />
      <Token />
      <Footer />
    </>
  );
}

export default App;
