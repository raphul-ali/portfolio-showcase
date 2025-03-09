import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #2c3e50;
`;

const Nav = styled.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Times New Roman', serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #34495e;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: 'Times New Roman', serif;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 2rem;
  font-family: 'Times New Roman', serif;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const StatsSection = styled.section`
  padding: 6rem 10%;
  background: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 3px solid #2c3e50;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: 'Times New Roman', serif;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #7f8c8d;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ExperienceSection = styled.section`
  padding: 6rem 10%;
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Times New Roman', serif;
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #2c3e50;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin-bottom: 3rem;
  width: 50%;
  position: relative;

  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
  }

  &::before {
    content: '';
    position: absolute;
    right: -8px;
    top: 0;
    width: 16px;
    height: 16px;
    background: #2c3e50;
    border-radius: 50%;
  }

  &:nth-child(even)::before {
    right: auto;
    left: -8px;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const TimelineYear = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-family: 'Times New Roman', serif;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
`;

const PortfolioSection = styled.section`
  padding: 6rem 10%;
  background: white;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PortfolioCard = styled(motion.div)`
  background: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #2c3e50;
`;

const PortfolioContent = styled.div`
  padding: 2rem;
`;

const PortfolioTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: 'Times New Roman', serif;
`;

const PortfolioMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MetricItem = styled.div`
  text-align: center;
  
  span {
    display: block;
    &:first-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
      font-family: 'Times New Roman', serif;
    }
    &:last-child {
      font-size: 0.9rem;
      color: #7f8c8d;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

const stats = [
  { value: "$2.5B+", label: "Assets Under Management" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "250+", label: "High-Net-Worth Clients" }
];

const experience = [
  {
    year: "2020 - Present",
    title: "Senior Investment Manager",
    description: "Leading a team of financial advisors managing portfolios for high-net-worth individuals and institutional clients."
  },
  {
    year: "2015 - 2020",
    title: "Portfolio Manager",
    description: "Developed and implemented investment strategies resulting in consistent above-market returns for client portfolios."
  },
  {
    year: "2010 - 2015",
    title: "Investment Analyst",
    description: "Conducted comprehensive market research and financial analysis to identify investment opportunities."
  }
];

const portfolios = [
  {
    title: "Conservative Growth Fund",
    metrics: {
      return: "12.5%",
      risk: "Low",
      assets: "$800M",
      clients: "85+"
    }
  },
  {
    title: "High-Yield Bond Portfolio",
    metrics: {
      return: "8.2%",
      risk: "Medium",
      assets: "$1.2B",
      clients: "120+"
    }
  },
  {
    title: "Global Equity Fund",
    metrics: {
      return: "15.8%",
      risk: "High",
      assets: "$500M",
      clients: "45+"
    }
  }
];

const BankerPortfolio1: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo>MORGAN STANLEY</Logo>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </Nav>

      <Hero>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Wealth Management
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building Long-Term Financial Success
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Senior Investment Manager with over 15 years of experience in wealth management
            and portfolio optimization. Specializing in high-net-worth individual and
            institutional client services.
          </Description>
        </HeroContent>
      </Hero>

      <StatsSection id="stats">
        <SectionTitle>Key Performance Indicators</SectionTitle>
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
      </StatsSection>

      <ExperienceSection id="experience">
        <SectionTitle>Professional Experience</SectionTitle>
        <Timeline>
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceSection>

      <PortfolioSection id="portfolio">
        <SectionTitle>Investment Portfolios</SectionTitle>
        <PortfolioGrid>
          {portfolios.map((portfolio, index) => (
            <PortfolioCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PortfolioContent>
                <PortfolioTitle>{portfolio.title}</PortfolioTitle>
                <PortfolioMetrics>
                  <MetricItem>
                    <span>{portfolio.metrics.return}</span>
                    <span>Annual Return</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{portfolio.metrics.risk}</span>
                    <span>Risk Level</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{portfolio.metrics.assets}</span>
                    <span>AUM</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{portfolio.metrics.clients}</span>
                    <span>Clients</span>
                  </MetricItem>
                </PortfolioMetrics>
              </PortfolioContent>
            </PortfolioCard>
          ))}
        </PortfolioGrid>
      </PortfolioSection>
    </Container>
  );
};

export default BankerPortfolio1; 