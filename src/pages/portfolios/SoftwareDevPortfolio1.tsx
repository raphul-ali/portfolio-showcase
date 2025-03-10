import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f172a;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #0f172a;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(248, 250, 252, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #64748b;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    color: #0f172a;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  margin-top: 60px;

  @media (min-width: 768px) {
    padding: 0 10%;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.4rem;
  color: #475569;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const TechStack = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const TechTag = styled.span`
  padding: 0.375rem 0.75rem;
  background: white;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #475569;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }
`;

const Section = styled.section`
  padding: 3rem 1.5rem;
  background: white;

  @media (min-width: 768px) {
    padding: 6rem 10%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #0f172a;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: #3b82f6;
    border-radius: 2px;

    @media (min-width: 768px) {
      bottom: -10px;
      width: 60px;
      height: 4px;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div<{ $image: string }>`
  height: 180px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

const ProjectTag = styled.span`
  padding: 0.2rem 0.5rem;
  background: #f1f5f9;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #475569;

  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 10px;
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  margin-bottom: 0.375rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Success Rate" }
];

const techStack = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python",
  "AWS", "Docker", "GraphQL", "MongoDB", "PostgreSQL"
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce platform using microservices architecture, handling 100K+ daily users.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    tags: ["Node.js", "React", "MongoDB", "Docker", "AWS"]
  },
  {
    title: "AI-Powered Analytics",
    description: "Developed a machine learning platform for real-time data analytics and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"]
  },
  {
    title: "Blockchain Wallet",
    description: "Created a secure cryptocurrency wallet with multi-signature support and real-time trading.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
    tags: ["Solidity", "React", "Node.js", "Web3.js", "TypeScript"]
  }
];

const SoftwareDevPortfolio1: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Container>
      <Nav>
        <Logo>DEVELOPER</Logo>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <NavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
        <NavLink href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
        <NavLink href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</NavLink>
        <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
      </MobileMenu>

      <Hero>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full Stack Software Developer
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building scalable solutions for complex problems
          </Subtitle>
          <TechStack
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {techStack.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechStack>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle>Key Metrics</SectionTitle>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Section>

      <Section id="projects">
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectImage $image={project.image} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>
    </Container>
  );
};

export default SoftwareDevPortfolio1; 