import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #0a192f;
  color: #8892b0;
`;

const Header = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
`;

const BackgroundCode = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  font-family: 'Fira Code', monospace;
  overflow: hidden;
  z-index: 0;
  
  &::before {
    content: '{ }';
    font-size: 40rem;
    position: absolute;
    right: -5rem;
    top: 50%;
    transform: translateY(-50%);
    color: #64ffda;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Greeting = styled(motion.p)`
  color: #64ffda;
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: 4.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #8892b0;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  max-width: 500px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  font-family: 'Fira Code', monospace;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const ProjectsSection = styled.section`
  padding: 4rem 10%;
`;

const SectionTitle = styled.h3`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background: #233554;
    margin-left: 20px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #112240;
  padding: 2rem;
  border-radius: 4px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h4`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-family: 'Fira Code', monospace;
  color: #64ffda;
  font-size: 0.9rem;
`;

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses',
    tech: ['Python', 'TensorFlow', 'WebSocket']
  },
  {
    title: 'Blockchain Explorer',
    description: 'A web application for exploring blockchain transactions',
    tech: ['TypeScript', 'Web3.js', 'GraphQL']
  }
];

const DeveloperPortfolio = () => {
  return (
    <Container>
      <Header>
        <BackgroundCode />
        <Content>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            John Developer.
          </Name>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build things for the web.
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </Description>
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Check out my work
          </Button>
        </Content>
      </Header>

      <ProjectsSection>
        <SectionTitle>Some Things I've Built</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.description}</p>
              <TechStack>
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsSection>
    </Container>
  );
};

export default DeveloperPortfolio; 