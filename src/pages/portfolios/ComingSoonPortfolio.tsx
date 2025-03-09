import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const BackButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #444;
    transform: translateY(-2px);
  }
`;

interface ComingSoonPortfolioProps {
  profession: string;
}

const ComingSoonPortfolio: React.FC<ComingSoonPortfolioProps> = ({ profession }) => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {profession} Portfolio
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        This portfolio design is coming soon! We're working on creating a unique and
        professional portfolio template specifically tailored for {profession.toLowerCase()}s.
      </Description>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <BackButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </BackButton>
      </Link>
    </Container>
  );
};

export default ComingSoonPortfolio; 