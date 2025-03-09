import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #fff;
  color: #000;
`;

const Header = styled.header`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  overflow: hidden;
`;

const LeftSection = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightSection = styled.div`
  background: #FF3366;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, #FF3366 0%, #FF6B6B 100%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Name = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #FF3366;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const WorkGrid = styled.section`
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  background: #f8f8f8;
`;

const WorkItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const WorkOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #FF3366;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #FF6B6B;
    transform: translateY(-2px);
  }
`;

const works = [
  {
    title: 'Brand Identity',
    description: 'Modern branding for tech startup',
    image: 'https://source.unsplash.com/random/600x600?branding'
  },
  {
    title: 'UI/UX Design',
    description: 'Mobile app interface design',
    image: 'https://source.unsplash.com/random/600x600?interface'
  },
  {
    title: 'Illustration',
    description: 'Digital illustration series',
    image: 'https://source.unsplash.com/random/600x600?illustration'
  },
  {
    title: 'Motion Design',
    description: 'Animated brand elements',
    image: 'https://source.unsplash.com/random/600x600?motion'
  }
];

const DesignerPortfolio = () => {
  return (
    <Container>
      <Header>
        <LeftSection>
          <Name
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sarah
            <br />
            Designer
          </Name>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creative Designer & Art Director
          </Title>
          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I create bold, memorable designs that help brands stand out in today's
            crowded digital landscape. With a focus on typography, color, and motion,
            I bring brands to life across all platforms.
          </Description>
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </Button>
        </LeftSection>
        <RightSection />
      </Header>

      <WorkGrid>
        {works.map((work, index) => (
          <WorkItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <WorkImage src={work.image} alt={work.title} />
            <WorkOverlay>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </WorkOverlay>
          </WorkItem>
        ))}
      </WorkGrid>
    </Container>
  );
};

export default DesignerPortfolio; 