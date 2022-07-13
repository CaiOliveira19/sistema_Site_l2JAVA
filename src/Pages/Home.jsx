import React from "react";
import Header from '../ComponentsHome/Header/Header'
import HomePage from '../ComponentsHome/HomePage/HomePage'
import CreateAccount from '../ComponentsHome/CreateAccount/CreateAccount'
import Download from '../ComponentsHome/Download/Download'
import Footer from '../ComponentsHome/Footer/Footer'
import Noticias from '../ComponentsHome/Noticias/Noticias'
import Navbar from '../ComponentsHome/Navbar/Navbar'
import Gallery from '../ComponentsHome/Gallery/Gallery'

function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <HomePage />
      <CreateAccount />
      <Download />
      <Noticias />
      <Gallery />
      <Footer />
    </main>
  );
}

export default Home;