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
  color: #3498db;
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
    color: #3498db;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: #3498db;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const MetricsSection = styled.section`
  padding: 6rem 10%;
  background: white;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const MetricCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 1rem;
`;

const MetricLabel = styled.div`
  font-size: 1rem;
  color: #7f8c8d;
`;

const CampaignsSection = styled.section`
  padding: 6rem 10%;
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  text-align: center;
`;

const CampaignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CampaignCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CampaignImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CampaignContent = styled.div`
  padding: 2rem;
`;

const CampaignTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const CampaignMetrics = styled.div`
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
      color: #3498db;
    }
    &:last-child {
      font-size: 0.9rem;
      color: #7f8c8d;
    }
  }
`;

const CampaignDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const metrics = [
  { value: "500%", label: "Average ROI" },
  { value: "15M+", label: "Social Media Reach" },
  { value: "8.5%", label: "Conversion Rate" },
  { value: "250+", label: "Successful Campaigns" }
];

const campaigns = [
  {
    title: "E-commerce Growth Strategy",
    image: "https://source.unsplash.com/random/800x600?ecommerce,digital",
    description: "Implemented data-driven marketing strategy resulting in 200% increase in online sales.",
    metrics: {
      roi: "312%",
      conversions: "10.5%",
      reach: "2.5M",
      engagement: "25%"
    }
  },
  {
    title: "B2B Lead Generation",
    image: "https://source.unsplash.com/random/800x600?business,meeting",
    description: "Generated 500+ qualified leads through targeted LinkedIn advertising campaign.",
    metrics: {
      roi: "425%",
      conversions: "15.2%",
      reach: "500K",
      engagement: "18%"
    }
  },
  {
    title: "Brand Awareness Campaign",
    image: "https://source.unsplash.com/random/800x600?marketing,brand",
    description: "Increased brand visibility by 150% through multi-channel marketing approach.",
    metrics: {
      roi: "280%",
      conversions: "8.7%",
      reach: "5M",
      engagement: "22%"
    }
  }
];

const DigitalMarketingPortfolio1: React.FC = () => {
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
      </Nav>

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
              <CampaignImage src={campaign.image} alt={campaign.title} />
              <CampaignContent>
                <CampaignTitle>{campaign.title}</CampaignTitle>
                <CampaignMetrics>
                  <MetricItem>
                    <span>{campaign.metrics.roi}</span>
                    <span>ROI</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{campaign.metrics.conversions}</span>
                    <span>Conv. Rate</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{campaign.metrics.reach}</span>
                    <span>Reach</span>
                  </MetricItem>
                  <MetricItem>
                    <span>{campaign.metrics.engagement}</span>
                    <span>Engagement</span>
                  </MetricItem>
                </CampaignMetrics>
                <CampaignDescription>{campaign.description}</CampaignDescription>
              </CampaignContent>
            </CampaignCard>
          ))}
        </CampaignGrid>
      </CampaignsSection>
    </Container>
  );
};

export default DigitalMarketingPortfolio1; 