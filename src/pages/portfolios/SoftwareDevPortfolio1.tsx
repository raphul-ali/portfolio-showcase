import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #0a192f;
  color: #e6f1ff;
`;

const Nav = styled.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 25, 47, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  color: #64ffda;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: 'JetBrains Mono', monospace;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 15%;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const PreTitle = styled(motion.h2)`
  color: #64ffda;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const Subtitle = styled(motion.h2)`
  font-size: 3.5rem;
  color: #8892b0;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 1.2rem;
  max-width: 540px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  padding: 100px 15%;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;

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
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const ProjectIcon = styled.div`
  color: #64ffda;
  font-size: 2.5rem;
`;

const ProjectTitle = styled.h4`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
`;

const TechItem = styled.li`
  color: #64ffda;
`;

const ArchitectureSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
`;

const ArchitectureTitle = styled.h5`
  color: #ccd6f6;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ArchitectureDetails = styled.pre`
  color: #8892b0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  white-space: pre-wrap;
  line-height: 1.4;
`;

const projects = [
  {
    title: "Enterprise Resource Planning System",
    description: "Scalable ERP solution with microservices architecture, handling 10M+ daily transactions for Fortune 500 companies.",
    tech: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL", "Redis"],
    architecture: `
├── Microservices
│   ├── User Service
│   ├── Inventory Service
│   ├── Order Service
│   └── Analytics Service
├── Message Queue
└── API Gateway
    `
  },
  {
    title: "AI-Powered Code Analysis Platform",
    description: "Static code analysis tool using machine learning to detect potential bugs and security vulnerabilities in real-time.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker", "MongoDB"],
    architecture: `
├── ML Pipeline
│   ├── Code Parser
│   ├── Feature Extractor
│   └── Prediction Engine
├── API Layer
└── Real-time Analysis
    `
  },
  {
    title: "Distributed Trading Platform",
    description: "High-frequency trading platform processing 100K+ transactions per second with sub-millisecond latency.",
    tech: ["C++", "gRPC", "Apache Kafka", "InfluxDB", "Grafana"],
    architecture: `
├── Order Engine
│   ├── Matching Engine
│   └── Risk Manager
├── Market Data
└── Settlement
    `
  }
];

const SoftwareDevPortfolio1: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <Container>
      <Nav>
        <Logo>{"{ SD }"}</Logo>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </Nav>

      <Hero>
        <HeroContent>
          <PreTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </PreTitle>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sarah Mitchell.
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I architect scalable solutions.
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a software architect specializing in designing and implementing enterprise-scale
            distributed systems. With 10+ years of experience, I focus on creating robust,
            scalable, and maintainable solutions.
          </Description>
        </HeroContent>
      </Hero>

      <Section id="projects">
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectHeader>
                <ProjectIcon>⚡</ProjectIcon>
              </ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.tech.map((tech, i) => (
                  <TechItem key={i}>{tech}</TechItem>
                ))}
              </TechList>
              <AnimatePresence>
                {expandedProject === index && (
                  <ArchitectureSection
                    as={motion.div}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <ArchitectureTitle>Architecture Overview</ArchitectureTitle>
                    <ArchitectureDetails>{project.architecture}</ArchitectureDetails>
                  </ArchitectureSection>
                )}
              </AnimatePresence>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>
    </Container>
  );
};

export default SoftwareDevPortfolio1; 