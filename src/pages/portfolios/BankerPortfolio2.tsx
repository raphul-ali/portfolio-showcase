import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
  color: #ffffff;
  overflow-x: hidden;
`;

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%);
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
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #38bdf8, #22d3ee);
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
    background: linear-gradient(45deg, #38bdf8, #22d3ee);
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
  position: relative;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #38bdf8, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const MarketSection = styled.section`
  padding: 6rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #38bdf8, #22d3ee);
  }
`;

const MarketGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MarketCard = styled(motion.div)<{ $isActive: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #38bdf8, #22d3ee);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  ${props => props.$isActive && `
    background: rgba(255, 255, 255, 0.1);
  `}
`;

const MarketTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const MarketChart = styled.div`
  height: 150px;
  margin: 1rem 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(56, 189, 248, 0.1) 0%,
      rgba(34, 211, 238, 0.1) 100%
    );
  }
`;

const MarketMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const MetricItem = styled.div`
  text-align: center;

  span {
    display: block;
    &:first-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: #38bdf8;
    }
    &:last-child {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.02);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #38bdf8;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const markets = [
  {
    title: "Cryptocurrency Market",
    metrics: {
      volume: "$2.8B",
      change: "+12.5%",
      trades: "15K+",
      users: "50K+"
    }
  },
  {
    title: "Stock Trading",
    metrics: {
      volume: "$5.2B",
      change: "+8.2%",
      trades: "25K+",
      users: "75K+"
    }
  },
  {
    title: "Forex Exchange",
    metrics: {
      volume: "$3.5B",
      change: "+5.8%",
      trades: "20K+",
      users: "45K+"
    }
  }
];

const services = [
  {
    icon: "💳",
    title: "Digital Banking",
    description: "Next-generation banking solutions with instant transfers, smart analytics, and AI-powered insights."
  },
  {
    icon: "📊",
    title: "Robo-Advisory",
    description: "Automated portfolio management using advanced algorithms and machine learning."
  },
  {
    icon: "🔒",
    title: "Blockchain Solutions",
    description: "Secure and transparent financial transactions using cutting-edge blockchain technology."
  },
  {
    icon: "📱",
    title: "Mobile Trading",
    description: "Advanced trading platform with real-time market data and instant execution."
  }
];

const BankerPortfolio2: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<number | null>(null);

  return (
    <Container>
      <BackgroundGradient />
      <Content>
        <Nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>FINTECH</Logo>
          <NavItems>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#markets">Markets</NavItem>
            <NavItem href="#services">Services</NavItem>
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
              The Future of Finance
            </Title>
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovative financial solutions powered by cutting-edge technology
            </Subtitle>
          </HeroContent>
        </Hero>

        <MarketSection id="markets">
          <SectionTitle>Market Overview</SectionTitle>
          <MarketGrid>
            {markets.map((market, index) => (
              <MarketCard
                key={index}
                $isActive={activeMarket === index}
                onClick={() => setActiveMarket(activeMarket === index ? null : index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <MarketTitle>{market.title}</MarketTitle>
                <MarketChart />
                <MarketMetrics>
                  <MetricItem>
                    <span>{market.metrics.volume}</span>
                    <span>Volume</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{market.metrics.change}</span>
                    <span>24h Change</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{market.metrics.trades}</span>
                    <span>Trades</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{market.metrics.users}</span>
                    <span>Active Users</span>
                  </MetricItem>
                </MarketMetrics>
              </MarketCard>
            ))}
          </MarketGrid>
        </MarketSection>

        <ServicesSection id="services">
          <SectionTitle>Digital Services</SectionTitle>
          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </ServicesSection>
      </Content>
    </Container>
  );
};

export default BankerPortfolio2; 