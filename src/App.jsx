import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BlurBlob from './BlurBlob';
import ParticleBackground from './components/ParticleBackground';
import CursorSpotlight from './components/CursorSpotlight';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-[#030712] min-h-screen text-white relative overflow-x-hidden selection:bg-cyan-500 selection:text-slate-900">
      {/* Top Scroll Indicator with Spring Physics */}
      <ScrollProgress />

      {/* Interactive Cursor Glow Spotlight */}
      <CursorSpotlight />

      {/* Interactive Particle Constellation Canvas */}
      <ParticleBackground />

      {/* Dynamic Background Ambient Blobs with Fancy Blue & Cyan undertones */}
      <BlurBlob position={{ top: '15%', left: '15%' }} size={{ width: '450px', height: '450px' }} color="bg-blue-600" />
      <BlurBlob position={{ top: '38%', left: '88%' }} size={{ width: '480px', height: '480px' }} color="bg-cyan-500" />
      <BlurBlob position={{ top: '62%', left: '12%' }} size={{ width: '520px', height: '520px' }} color="bg-indigo-600" />
      <BlurBlob position={{ top: '85%', left: '82%' }} size={{ width: '440px', height: '440px' }} color="bg-sky-500" />

      {/* Subtle Grid Mesh Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:24px_36px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_70%,transparent_100%)]"></div>

      {/* Main Content Sections */}
      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
