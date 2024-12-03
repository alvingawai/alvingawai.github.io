import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectsSection = styled.section`
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
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

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
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color-secondary);
  margin-bottom: 3rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled.div`
  background: var(--background-dark);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay};
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-gradient);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--border-color);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid var(--border-color);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  ${props => props.primary ? `
    background: var(--accent-gradient);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
  ` : `
    background: rgba(99, 102, 241, 0.1);
    color: var(--text-color);
    border: 1px solid var(--border-color);
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  }

  svg {
    font-size: 1.1em;
  }
`;

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and Node.js",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 2",
    description: "Mobile-first e-commerce platform with real-time updates",
    image: "https://via.placeholder.com/400x200",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 3",
    description: "AI-powered data visualization dashboard",
    image: "https://via.placeholder.com/400x200",
    tags: ["Python", "TensorFlow", "D3.js"],
    liveLink: "#",
    githubLink: "#"
  }
];

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <Title>Featured Projects</Title>
        <Description>
          Here are some of my recent projects that showcase my skills and experience.
        </Description>
        
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} delay={`${0.2 + index * 0.1}s`}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagContainer>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagContainer>
                <ProjectLinks>
                  <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer" primary>
                    Live Demo
                  </ProjectLink>
                  <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
