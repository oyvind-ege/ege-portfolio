import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  techData,
  techSkillData,
  softSkillData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [techDta, setTechDta] = useState([]);
  const [techskills, setTechSkills] = useState([]);
  const [softskills, setSoftSkills] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setTechDta([...techData]);
    setTechSkills([...techSkillData]);
    setSoftSkills([...softSkillData]);
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, contact, footer, techDta, techskills, softskills }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
