import { useState, useEffect } from 'react';
import Navbar from './shared/Navbar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Clients from './component/clients';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Footer from './shared/Footer';

function App() {
  const [activeNav, setActiveNav] = useState(''); // Tracks the active nav item

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const sections = document.querySelectorAll('section');
      let activeSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection = section.id; // Set the active section based on position
        }
      });

      setActiveNav(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);

    // Smooth scroll to the section
    const section = document.getElementById(navItem);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-home-full">
    
      <Navbar activeNav={activeNav} onNavClick={handleNavClick} />

      <section id="home" className="h-screen bg-home-full-cinemala bg-cover flex items-center justify-center">
        <Home/>
      </section>
      <section id="about" className="h-screen bg-transparent flex items-center justify-center">
<About/>
      </section>
      <section id="services" className="h-fit bg-gradient-to-b from-transparent to-emerald-200 flex items-center justify-center">
<Service/>
{/* client  */}


      </section>
      {/* client  */}
      <section id="clients" className="py-20 bg-gradient-to-b from-emerald-200 to-transparent">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-600 mb-8">
      Our Clients
    </h2>
     <Clients/>
    
  </div>
</section>
      {/* client end  */}
      <section id="gallery" className="h-fit bg-transparent items-center justify-center">
        <Gallery />
      </section>
      <section id="contact" className="h-screen bg-gradient-to-b from-transparent to-violet-500 flex items-center justify-center">
        <Contact/>
      </section>
      <section id="contact" className="h-fit w-full bg-gradient-to-b from-transparent to-violet-500 ">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
