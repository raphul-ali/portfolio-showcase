import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow-x: hidden;
`;

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)<{ $isExpanded: boolean }>`
  grid-column: span 4;
  aspect-ratio: 1;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s ease;

  ${props => props.$isExpanded && `
    grid-column: span 8;
    aspect-ratio: 16/9;
  `}

  @media (max-width: 1200px) {
    grid-column: span 6;
    ${props => props.$isExpanded && `
      grid-column: span 12;
    `}
  }

  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const ProjectDescription = styled(motion.p)`
  color: #ccc;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #4ECDC4;
`;

const projects = [
  {
    title: "Interactive Dashboard",
    description: "A real-time analytics dashboard with customizable widgets, dark/light themes, and data visualization using D3.js.",
    image: "https://source.unsplash.com/random/800x600?dashboard,data",
    tech: ["React", "D3.js", "Socket.io", "Material-UI"],
    color: "#FF6B6B"
  },
  {
    title: "Social Platform",
    description: "A modern social media platform with real-time messaging, story features, and AI-powered content recommendations.",
    image: "https://source.unsplash.com/random/800x600?social,mobile",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "TailwindCSS"],
    color: "#4ECDC4"
  },
  {
    title: "3D Portfolio",
    description: "An interactive 3D portfolio website using Three.js with custom animations and particle effects.",
    image: "https://source.unsplash.com/random/800x600?3d,design",
    tech: ["Three.js", "React Three Fiber", "GSAP", "Blender"],
    color: "#FFD93D"
  },
  {
    title: "Game Platform",
    description: "A browser-based gaming platform with multiplayer support, leaderboards, and achievements system.",
    image: "https://source.unsplash.com/random/800x600?gaming,computer",
    tech: ["Phaser.js", "WebRTC", "Firebase", "TypeScript"],
    color: "#6C5CE7"
  }
];

const WebDevPortfolio2: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Container>
      <GradientBackground />
      <Content>
        <Hero>
          <HeroContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Creative Web Developer
            </Title>
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting immersive digital experiences through code and creativity
            </Subtitle>
          </HeroContent>
        </Hero>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              $isExpanded={expandedIndex === index}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <ProjectTitle style={{ color: project.color }}>{project.title}</ProjectTitle>
                <AnimatePresence mode="wait">
                  {expandedIndex === index && (
                    <ProjectDescription
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      {project.description}
                    </ProjectDescription>
                  )}
                </AnimatePresence>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </Container>
  );
};

export default WebDevPortfolio2; 