import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App;
