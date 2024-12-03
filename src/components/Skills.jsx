import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--light-gray);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const SkillCategory = styled.div`
  opacity: 0;
  animation: ${slideIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}s;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const SkillName = styled.span`
  flex: 1;
  font-weight: 500;
`;

const ProgressBar = styled.div`
  flex: 2;
  height: 8px;
  background-color: rgba(37, 99, 235, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: var(--primary-color);
    border-radius: 4px;
    transition: width 1s ease-out;
  }
`;

const skills = {
  'Frontend Development': [
    { name: 'React.js', level: 90 },
    { name: 'JS/TS', level: 85 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'Redux', level: 80 },
  ],
  'Backend Development': [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'SQL/NoSQL', level: 75 },
    { name: 'RESTful APIs', level: 90 },
  ],
  'DevOps & Tools': [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 },
  ],
};

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <Title>Skills & Expertise</Title>
        <SkillsGrid>
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory key={category} delay={index * 0.2}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsList>
                {items.map(skill => (
                  <SkillItem key={skill.name}>
                    <SkillName>{skill.name}</SkillName>
                    <ProgressBar progress={inView ? skill.level : 0} />
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}

export default Skills;
