import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow-x: hidden;
`;

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 10%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 90% 90%, rgba(80, 200, 255, 0.1) 0%, transparent 50%);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Nav = styled(motion.nav)`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #64ffda, #50c8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #64ffda, #50c8ff);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #64ffda, #50c8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const TechStackContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const TechBadge = styled(motion.div)`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)<{ $isActive: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ${props => props.$isActive && `
    background: rgba(255, 255, 255, 0.1);
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, #64ffda, #50c8ff);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const DemoSection = styled(motion.div)`
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const DemoTitle = styled.h4`
  font-size: 1rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const DemoContent = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: pre-wrap;
`;

const projects = [
  {
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing and experimenting with neural network architectures in real-time.",
    tech: ["React", "TensorFlow.js", "Three.js", "WebGL"],
    demo: `
// Neural Network Configuration
{
  layers: [
    { type: 'input', neurons: 784 },
    { type: 'conv2d', filters: 32 },
    { type: 'maxpool2d' },
    { type: 'dense', neurons: 10 }
  ]
}`
  },
  {
    title: "Quantum Computing Simulator",
    description: "Web-based quantum circuit simulator supporting multiple qubits and quantum gates.",
    tech: ["TypeScript", "WebAssembly", "Rust", "WebGL"],
    demo: `
// Quantum Circuit
circuit.addGate('h', 0)  // Hadamard
circuit.addGate('cx', [0, 1])  // CNOT
circuit.measure([0, 1])`
  },
  {
    title: "Blockchain Explorer",
    description: "Real-time blockchain visualization and analysis tool with smart contract integration.",
    tech: ["Next.js", "Ethers.js", "Web3.js", "D3.js"],
    demo: `
// Smart Contract Interaction
const contract = new ethers.Contract(
  address,
  abi,
  provider
);

await contract.connect(signer)
  .transfer(recipient, amount);`
  }
];

const SoftwareDevPortfolio2: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const techStack = [
    "TypeScript", "React", "Node.js", "Python",
    "TensorFlow", "WebGL", "Rust", "WebAssembly",
    "Blockchain", "Cloud Native"
  ];

  return (
    <Container>
      <BackgroundGradient />
      <Content>
        <Nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>INNOVATE</Logo>
          <NavItems>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </NavItems>
        </Nav>

        <Hero>
          <HeroContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovation Through Code
            </Title>
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pushing the boundaries of technology with cutting-edge solutions
            </Subtitle>
            <TechStackContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {techStack.map((tech, index) => (
                <TechBadge
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </TechBadge>
              ))}
            </TechStackContainer>
          </HeroContent>
        </Hero>

        <ProjectsSection id="projects">
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                $isActive={activeProject === index}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStackContainer>
                  {project.tech.map((tech, i) => (
                    <TechBadge
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </TechBadge>
                  ))}
                </TechStackContainer>
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DemoSection>
                      <DemoTitle>Demo Code</DemoTitle>
                      <DemoContent>{project.demo}</DemoContent>
                    </DemoSection>
                  </motion.div>
                )}
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>
      </Content>
    </Container>
  );
};

export default SoftwareDevPortfolio2; 