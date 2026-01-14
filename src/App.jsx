import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import WhyReplace from './sections/WhyReplace';
import Process from './sections/Process';
import RoofingSystems from './sections/RoofingSystems';
import WhyTrust from './sections/WhyTrust';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Hero />
        <WhyReplace />
        <Process />
        <RoofingSystems />
        <WhyTrust />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
