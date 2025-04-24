import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import DemoUnavailable from './components/demo-unavailable';
import ThankYou from './components/thank-you';
import CursorEffect from './components/ui/cursor-effect';
import ScrollProgress from './components/ui/scroll-progress';
import AnimatedBackground from './components/ui/animated-background';

function MainContent() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <CursorEffect />
          <ScrollProgress />
          <AnimatedBackground />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/demo-unavailable" element={<DemoUnavailable />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
