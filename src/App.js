import React from "react";
import Navbar from "./components/navbari/Navbar";
import Mesi from "./components/mesi/Mesi";
import About from "./components/about/About";
import Footer from "./components/Footeri/Footer";
import Skills from "./components/Prova/Skills";


function App() {
  return (
    <>
      <Navbar />
      <Mesi />
     <About />
     <Skills />
     <Footer />
      
    </>
  );
}

export default App;
