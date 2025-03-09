import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
  color: white;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Header = styled.header`
  text-align: left;
  margin-bottom: 6rem;
  padding-top: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

const Subtitle = styled(motion.div)`
  font-size: 2rem;
  color: #94a3b8;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 3rem;

  span {
    color: #7c3aed;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(45deg, #7c3aed, #ec4899);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionNumber = styled.span`
  font-size: 1.5rem;
  color: #4ECDC4;
  margin-right: 1rem;
  font-family: monospace;
`;

const ProfessionSection = styled(motion.section)`
  margin-bottom: 8rem;
`;

const ProfessionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProfessionIcon = styled(motion.div)`
  font-size: 2.5rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfessionTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
  }
`;

const VariantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(124, 58, 237, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    border-color: #7c3aed;
    box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.3);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardNumber = styled.span`
  font-size: 1.2rem;
  color: #7c3aed;
  font-family: monospace;
`;

const CardDescription = styled.p`
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CardImage = styled(motion.img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  filter: grayscale(30%);

  &:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`;

const ReadMore = styled(motion.span)`
  color: #7c3aed;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  position: relative;
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(5px);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const portfolios = [
  {
    profession: "Web Developer",
    icon: "👨‍💻",
    variants: [
      {
        title: "Modern Minimalist",
        description: "Clean and minimal design focusing on code and projects. Perfect for showcasing your development skills and project portfolio.",
        path: "/web-dev-1",
        image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#61DAFB"
      },
      {
        title: "Creative Developer",
        description: "Bold and interactive design showcasing web innovations. Ideal for creative developers who push the boundaries of web technology.",
        path: "/web-dev-2",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#FF6B6B"
      }
    ]
  },
  {
    profession: "Software Developer",
    icon: "🚀",
    variants: [
      {
        title: "Tech Professional",
        description: "Enterprise-focused design highlighting software architecture and complex system designs. Perfect for senior developers.",
        path: "/software-dev-1",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#4ECDC4"
      },
      {
        title: "Innovation Leader",
        description: "Dynamic portfolio showcasing cutting-edge projects and technological innovation. Ideal for tech leads and architects.",
        path: "/software-dev-2",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#A8E6CF"
      }
    ]
  },
  {
    profession: "Digital Marketer",
    icon: "📈",
    variants: [
      {
        title: "Data-Driven Marketer",
        description: "Analytics-focused design with campaign showcases and performance metrics. Perfect for performance marketers.",
        path: "/digital-marketing-1",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#FFD93D"
      },
      {
        title: "Creative Strategist",
        description: "Visual-centric portfolio highlighting brand stories and creative campaigns. Ideal for creative directors and strategists.",
        path: "/digital-marketing-2",
        image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#FF8B94"
      }
    ]
  },
  {
    profession: "Banker",
    icon: "💼",
    variants: [
      {
        title: "Professional Finance",
        description: "Corporate and trustworthy design showcasing financial expertise and portfolio management skills. Perfect for investment bankers.",
        path: "/banker-1",
        image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#2C3E50"
      },
      {
        title: "Modern Banker",
        description: "Contemporary design focusing on fintech innovation and modern banking solutions. Ideal for fintech professionals.",
        path: "/banker-2",
        image: "https://images.pexels.com/photos/7654579/pexels-photo-7654579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#3498DB"
      }
    ]
  },
  {
    profession: "Teacher",
    icon: "👩‍🏫",
    variants: [
      {
        title: "Education Leader",
        description: "Professional portfolio highlighting academic excellence and teaching methodology. Perfect for educational leaders.",
        path: "/teacher-1",
        image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#9B59B6"
      },
      {
        title: "Modern Educator",
        description: "Interactive design showcasing innovative teaching approaches and digital learning solutions. Ideal for EdTech specialists.",
        path: "/teacher-2",
        image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "#E74C3C"
      }
    ]
  }
];

const LandingPage = () => {
  return (
    <Container>
      <BackgroundGradient />
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Portfolio Excellence
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Explore <span>10 unique portfolio designs</span> across 5 professions.
            Choose your perfect presentation style and showcase your professional journey.
          </Subtitle>
        </Header>

        {portfolios.map((profession, profIndex) => (
          <ProfessionSection
            key={profIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * profIndex, ease: "easeOut" }}
          >
            <ProfessionHeader>
              <ProfessionIcon
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * profIndex }}
              >
                {profession.icon}
              </ProfessionIcon>
              <ProfessionTitle>{profession.profession}</ProfessionTitle>
            </ProfessionHeader>
            <VariantsGrid>
              {profession.variants.map((variant, varIndex) => (
                <StyledLink to={variant.path} key={varIndex}>
                  <Card
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (profIndex * 2 + varIndex) * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CardImage
                      src={variant.image}
                      alt={variant.title}
                      whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                    />
                    <CardContent>
                      <CardTitle>
                        <CardNumber>{String(varIndex + 1).padStart(2, '0')}</CardNumber>
                        {variant.title}
                      </CardTitle>
                      <CardDescription>{variant.description}</CardDescription>
                      <ReadMore
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        View Portfolio
                      </ReadMore>
                    </CardContent>
                  </Card>
                </StyledLink>
              ))}
            </VariantsGrid>
          </ProfessionSection>
        ))}
      </Content>
    </Container>
  );
};

export default LandingPage; 