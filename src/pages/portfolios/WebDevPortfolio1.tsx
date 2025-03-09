import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  background: #1a1b1e;
  color: #ffffff;
`;

const Nav = styled.nav`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 27, 30, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const Logo = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  color: #61DAFB;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #61DAFB;
  }
`;

const Hero = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15%;
  position: relative;
`;

const Greeting = styled(motion.p)`
  color: #61DAFB;
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const Subtitle = styled(motion.h2)`
  font-size: 3rem;
  color: #8892b0;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 1.2rem;
  max-width: 500px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  border: 1px solid #61DAFB;
  color: #61DAFB;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(97, 218, 251, 0.1);
  }
`;

const Section = styled.section`
  padding: 8rem 15%;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 3rem;
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
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h4`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  color: #61DAFB;
`;

const TechTag = styled.span`
  background: #233554;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce platform using microservices architecture, handling 100K+ daily users.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Docker", "AWS"]
  },
  {
    title: "Social Media Dashboard",
    description: "Developed a real-time analytics dashboard for social media management and content scheduling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    tech: ["Vue.js", "GraphQL", "PostgreSQL", "Redis", "D3.js"]
  },
  {
    title: "AI-Powered Chat App",
    description: "Created an intelligent chat application with natural language processing and real-time translation.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
    tech: ["TypeScript", "OpenAI API", "WebSocket", "Express", "MongoDB"]
  }
];

const WebDevPortfolio1: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo>&lt;JD /&gt;</Logo>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </Nav>

      <Hero>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </Greeting>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          John Developer.
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build things for the web.
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm a web developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </Description>
        <Button
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Check out my work
        </Button>
      </Hero>

      <Section id="projects">
        <SectionTitle>Some Things I've Built</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>
    </Container>
  );
};

export default WebDevPortfolio1; 