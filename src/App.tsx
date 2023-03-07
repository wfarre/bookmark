import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SectionFeatures from "./components/Section/SectionFeatures";

import SectionDowload from "./components/Section/SectionDowload";
import SectionFaq from "./components/Section/SectionFaq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" id="app">
      <Navbar />
      <Header />
      <main>
        <SectionFeatures />
        <SectionDowload />
        <SectionFaq />
      </main>

      <Footer />
    </div>
  );
}

export default App;
