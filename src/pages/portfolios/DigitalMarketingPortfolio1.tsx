import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #2c3e50;
`;

const Nav = styled.nav`
  padding: 1rem;
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

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #3498db;

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
  color: #2c3e50;
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
  background: rgba(255, 255, 255, 0.98);
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
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  &:hover {
    color: #3498db;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
  font-size: 2.25rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.5;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const MetricsSection = styled.section`
  padding: 3rem 1.5rem;
  background: white;

  @media (min-width: 768px) {
    padding: 6rem 10%;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

const MetricCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 10px;
  }
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const CampaignsSection = styled.section`
  padding: 3rem 1.5rem;
  background: #f8f9fa;

  @media (min-width: 768px) {
    padding: 6rem 10%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const CampaignGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

const CampaignCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    border-radius: 10px;
  }
`;

const CampaignImage = styled.div<{ $image: string }>`
  height: 180px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
  overflow: hidden;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768px) {
    height: 200px;
    border-radius: 10px 10px 0 0;
  }
`;

const CampaignContent = styled.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const CampaignTitle = styled.h3`
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const CampaignMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const MetricItem = styled.div`
  text-align: center;
  
  span {
    display: block;
    &:first-child {
      font-size: 1.25rem;
      font-weight: bold;
      color: #3498db;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }
    &:last-child {
      font-size: 0.8rem;
      color: #7f8c8d;

      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;

const CampaignDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const metrics = [
  { value: "500%", label: "Average ROI" },
  { value: "15M+", label: "Social Media Reach" },
  { value: "8.5%", label: "Conversion Rate" },
  { value: "250+", label: "Successful Campaigns" }
];

const campaigns = [
  {
    title: "Sustainable Fashion Campaign",
    description: "Led a viral social media campaign for an eco-friendly fashion brand, resulting in 200% increase in engagement.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop",
    metrics: {
      reach: "2.5M+",
      engagement: "28%",
      conversion: "12%",
      roi: "320%"
    }
  },
  {
    title: "Tech Startup Launch",
    description: "Orchestrated a multi-channel marketing campaign for a SaaS startup's product launch.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    metrics: {
      reach: "1.8M+",
      engagement: "32%",
      conversion: "15%",
      roi: "450%"
    }
  },
  {
    title: "Food Delivery App",
    description: "Created and executed a localized digital marketing strategy for a food delivery service.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop",
    metrics: {
      reach: "850K+",
      engagement: "25%",
      conversion: "18%",
      roi: "280%"
    }
  }
];

const DigitalMarketingPortfolio1: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Container>
      <Nav>
        <Logo>DataDriven</Logo>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#metrics">Metrics</NavLink>
          <NavLink href="#campaigns">Campaigns</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <NavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
        <NavLink href="#metrics" onClick={() => setIsMobileMenuOpen(false)}>Metrics</NavLink>
        <NavLink href="#campaigns" onClick={() => setIsMobileMenuOpen(false)}>Campaigns</NavLink>
        <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
      </MobileMenu>

      <Hero>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Data-Driven Digital Marketing Excellence
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming Insights into Results
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experienced digital marketer specializing in data analytics, conversion optimization,
            and ROI-focused campaign management. Proven track record of driving measurable results
            across multiple industries.
          </Description>
        </HeroContent>
      </Hero>

      <MetricsSection id="metrics">
        <SectionTitle>Key Performance Metrics</SectionTitle>
        <MetricsGrid>
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MetricValue>{metric.value}</MetricValue>
              <MetricLabel>{metric.label}</MetricLabel>
            </MetricCard>
          ))}
        </MetricsGrid>
      </MetricsSection>

      <CampaignsSection id="campaigns">
        <SectionTitle>Featured Campaigns</SectionTitle>
        <CampaignGrid>
          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CampaignImage $image={campaign.image} />
              <CampaignContent>
                <CampaignTitle>{campaign.title}</CampaignTitle>
                <CampaignDescription>{campaign.description}</CampaignDescription>
                <MetricsGrid>
                  <MetricItem>
                    <MetricValue>{campaign.metrics.reach}</MetricValue>
                    <MetricLabel>Reach</MetricLabel>
                  </MetricItem>
                  <MetricItem>
                    <MetricValue>{campaign.metrics.engagement}</MetricValue>
                    <MetricLabel>Engagement</MetricLabel>
                  </MetricItem>
                  <MetricItem>
                    <MetricValue>{campaign.metrics.conversion}</MetricValue>
                    <MetricLabel>Conversion</MetricLabel>
                  </MetricItem>
                  <MetricItem>
                    <MetricValue>{campaign.metrics.roi}</MetricValue>
                    <MetricLabel>ROI</MetricLabel>
                  </MetricItem>
                </MetricsGrid>
              </CampaignContent>
            </CampaignCard>
          ))}
        </CampaignGrid>
      </CampaignsSection>
    </Container>
  );
};

export default DigitalMarketingPortfolio1; 