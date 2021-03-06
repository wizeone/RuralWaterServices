import React from 'react';
import About from './components/about/About';
import Divider from '../../common/components/divider/Divider';
import Footer from '../../common/components/footer/Footer';
import Navbar from '../../common/components/navbar/Navbar';
import Hero from './components/hero/Hero';
import History from './components/history/History';
import Menu from './components/menu/Menu';
import './home.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="BodyContent">
        <Hero />
        <Divider />
        <Menu />
        <Divider />
        <About />
        <Divider />
        <History />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home;