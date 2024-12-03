import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  background: var(--background-dark);
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, 
    rgba(99, 102, 241, 0.15) 0%,
    rgba(99, 102, 241, 0.05) 25%,
    rgba(15, 23, 42, 0) 50%
  );
  z-index: 0;
`;

const Content = styled.div`
  text-align: center;
  max-width: 1000px;
  width: 90%;
  position: relative;
  z-index: 1;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    300deg,
    #6366f1 0%,
    #818cf8 25%,
    #4f46e5 50%,
    #6366f1 75%,
    #818cf8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  max-width: 1000px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards;
  padding: 0.1em 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-color-secondary);
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards;
  animation-delay: 0.5s;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--accent-gradient);
  color: white;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards, ${float} 3s ease-in-out infinite;
  animation-delay: 1s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`;

const CodeBlock = styled.div`
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 16px;
  margin-top: 3rem;
  text-align: left;
  border: 1px solid var(--border-color);
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards;
  animation-delay: 1.5s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25), 
              inset 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-gradient);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 0.75rem;
    margin-top: 2rem;
  }
`;

const CodeLine = styled.pre`
  color: var(--text-color);
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;

  .comment { color: #6b7280; }
  .keyword { color: #818cf8; }
  .string { color: #34d399; }
  .function { color: #60a5fa; }

  @media (max-width: 768px) {
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.4;
  }
`;

function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <HeroSection id="home" ref={ref}>
      <GradientBackground />
      <Content>
        <Title>Building Digital Experiences</Title>
        <Subtitle>Full Stack Engineer crafting modern web and mobile solutions with code and creativity</Subtitle>
        <CTAButton href="#projects">View My Work</CTAButton>
        <CodeBlock>
          <CodeLine>
            <span className="comment">// Welcome to my portfolio</span>{'\n'}
            <span className="keyword">const</span> developer = {'{'}{'\n'}
            {'  '}name: <span className="string">"Alvin Gawai"</span>,{'\n'}
            {'  '}role: <span className="string">"Full Stack Engineer"</span>,{'\n'}
            {'  '}skills: [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"TypeScript"</span>],{'\n'}
            {'  '}<span className="function">code</span>: () {'=>'} <span className="string">"Building the future"</span>{'\n'}
            {'}'};
          </CodeLine>
        </CodeBlock>
      </Content>
    </HeroSection>
  );
}

export default Hero;
