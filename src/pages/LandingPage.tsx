import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4ECDC4;
`;

const CardDescription = styled.p`
  color: #ccc;
  margin-bottom: 1rem;
`;

const portfolios = [
  {
    title: 'Photographer',
    description: 'Minimalist design with focus on visual storytelling',
    path: '/photographer',
    color: '#FF6B6B'
  },
  {
    title: 'Developer',
    description: 'Modern tech-focused portfolio with interactive elements',
    path: '/developer',
    color: '#4ECDC4'
  },
  {
    title: 'Designer',
    description: 'Creative and bold portfolio showcasing visual work',
    path: '/designer',
    color: '#95E1D3'
  },
  {
    title: 'Artist',
    description: 'Artistic portfolio with gallery-style presentation',
    path: '/artist',
    color: '#FCE38A'
  },
  {
    title: 'Writer',
    description: 'Clean and elegant portfolio for written content',
    path: '/writer',
    color: '#EAFFD0'
  },
  {
    title: 'Architect',
    description: 'Structured portfolio highlighting architectural projects',
    path: '/architect',
    color: '#95A5A6'
  },
  {
    title: 'Musician',
    description: 'Dynamic portfolio with audio integration',
    path: '/musician',
    color: '#E056FD'
  },
  {
    title: 'Consultant',
    description: 'Professional portfolio emphasizing expertise',
    path: '/consultant',
    color: '#7ED6DF'
  },
  {
    title: 'Chef',
    description: 'Culinary portfolio with rich visual elements',
    path: '/chef',
    color: '#FF7675'
  },
  {
    title: 'Filmmaker',
    description: 'Cinematic portfolio showcasing video work',
    path: '/filmmaker',
    color: '#FD79A8'
  }
];

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <Title>Portfolio Excellence</Title>
        <Subtitle>
          In today's digital age, a stunning portfolio website is your gateway to success. 
          It's not just a collection of work—it's your digital identity, your brand story, 
          and your professional footprint in the online world. Explore our diverse collection 
          of portfolio designs tailored for different professions.
        </Subtitle>
      </Header>

      <Grid>
        {portfolios.map((portfolio, index) => (
          <StyledLink to={portfolio.path} key={index}>
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardTitle style={{ color: portfolio.color }}>{portfolio.title}</CardTitle>
              <CardDescription>{portfolio.description}</CardDescription>
            </Card>
          </StyledLink>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage; 