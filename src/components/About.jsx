import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--accent-gradient);
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 2px;
    background: var(--accent-gradient);
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HighlightItem = styled.div`
  font-size: 1.1rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 0.3s;
  border-radius: 12px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    z-index: -1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;
  transform: scale(.85);
  
  
  &:hover {
    transform: scale(.84);
    box-shadow: 12px 12px 12px  var(--primary-color);
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.2) 0%,
    rgba(99, 102, 241, 0) 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <Content delay="0.2s">
          <Title>About Me</Title>
          <Description>
            I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
            With a keen eye for detail and a love for clean, efficient code, I specialize in creating seamless web applications 
            that deliver exceptional user experiences.
          </Description>
          <Description>
            My journey in software development has equipped me with a diverse skill set and the ability to tackle complex 
            challenges with innovative solutions.
          </Description>
          <HighlightGrid>
            <HighlightItem>Full Stack Development</HighlightItem>
            <HighlightItem>Modern Web Technologies</HighlightItem>
            <HighlightItem>Responsive Design</HighlightItem>
            <HighlightItem>Problem Solving</HighlightItem>
          </HighlightGrid>
        </Content>
        
        <ImageContainer>
          <GlowEffect />
          <ProfileImage 
            src="/profile-placeholder.jpg" 
            alt="Professional headshot"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x600';
            }}
          />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
}

export default About;
