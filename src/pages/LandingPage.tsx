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

const ProfessionSection = styled.section`
  margin-bottom: 4rem;
`;

const ProfessionTitle = styled.h2`
  font-size: 2rem;
  color: #4ECDC4;
  margin-bottom: 2rem;
  text-align: center;
`;

const VariantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
`;

const CardDescription = styled.p`
  color: #ccc;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const portfolios = [
  {
    profession: "Web Developer",
    variants: [
      {
        title: "Modern Minimalist",
        description: "Clean and minimal design focusing on code and projects",
        path: "/web-dev-1",
        image: "https://source.unsplash.com/random/800x600?webdevelopment,code",
        color: "#61DAFB"
      },
      {
        title: "Creative Developer",
        description: "Bold and interactive design showcasing web innovations",
        path: "/web-dev-2",
        image: "https://source.unsplash.com/random/800x600?programming,laptop",
        color: "#FF6B6B"
      }
    ]
  },
  {
    profession: "Software Developer",
    variants: [
      {
        title: "Tech Professional",
        description: "Enterprise-focused design highlighting software architecture",
        path: "/software-dev-1",
        image: "https://source.unsplash.com/random/800x600?software,technology",
        color: "#4ECDC4"
      },
      {
        title: "Innovation Leader",
        description: "Dynamic portfolio showcasing cutting-edge projects",
        path: "/software-dev-2",
        image: "https://source.unsplash.com/random/800x600?coding,computer",
        color: "#A8E6CF"
      }
    ]
  },
  {
    profession: "Digital Marketer",
    variants: [
      {
        title: "Data-Driven Marketer",
        description: "Analytics-focused design with campaign showcases",
        path: "/digital-marketing-1",
        image: "https://source.unsplash.com/random/800x600?marketing,analytics",
        color: "#FFD93D"
      },
      {
        title: "Creative Strategist",
        description: "Visual-centric portfolio highlighting brand stories",
        path: "/digital-marketing-2",
        image: "https://source.unsplash.com/random/800x600?socialmedia,marketing",
        color: "#FF8B94"
      }
    ]
  },
  {
    profession: "Banker",
    variants: [
      {
        title: "Professional Finance",
        description: "Corporate and trustworthy design for financial expertise",
        path: "/banker-1",
        image: "https://source.unsplash.com/random/800x600?finance,banking",
        color: "#2C3E50"
      },
      {
        title: "Modern Banker",
        description: "Contemporary design focusing on fintech and innovation",
        path: "/banker-2",
        image: "https://source.unsplash.com/random/800x600?business,finance",
        color: "#3498DB"
      }
    ]
  },
  {
    profession: "Teacher",
    variants: [
      {
        title: "Education Leader",
        description: "Professional portfolio for academic excellence",
        path: "/teacher-1",
        image: "https://source.unsplash.com/random/800x600?education,teaching",
        color: "#9B59B6"
      },
      {
        title: "Modern Educator",
        description: "Interactive design showcasing teaching innovation",
        path: "/teacher-2",
        image: "https://source.unsplash.com/random/800x600?classroom,learning",
        color: "#E74C3C"
      }
    ]
  }
];

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <Title>Portfolio Excellence</Title>
        <Subtitle>
          Explore our collection of 10 unique portfolio designs across 5 professions.
          Each profession features two distinct styles, allowing you to choose the perfect
          presentation for your professional journey.
        </Subtitle>
      </Header>

      {portfolios.map((profession, profIndex) => (
        <ProfessionSection key={profIndex}>
          <ProfessionTitle>{profession.profession}</ProfessionTitle>
          <VariantsGrid>
            {profession.variants.map((variant, varIndex) => (
              <StyledLink to={variant.path} key={varIndex}>
                <Card
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (profIndex * 2 + varIndex) * 0.1 }}
                >
                  <CardImage src={variant.image} alt={variant.title} />
                  <CardTitle style={{ color: variant.color }}>{variant.title}</CardTitle>
                  <CardDescription>{variant.description}</CardDescription>
                </Card>
              </StyledLink>
            ))}
          </VariantsGrid>
        </ProfessionSection>
      ))}
    </Container>
  );
};

export default LandingPage; 