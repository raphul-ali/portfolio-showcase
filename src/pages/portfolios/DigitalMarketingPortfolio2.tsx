import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
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
    radial-gradient(circle at 20% 20%, rgba(255, 139, 148, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 217, 61, 0.15) 0%, transparent 50%);
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
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #FF8B94, #FFD93D);
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
    background: linear-gradient(45deg, #FF8B94, #FFD93D);
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
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://source.unsplash.com/random/1920x1080?creative,marketing') center/cover;
  filter: brightness(0.3);
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FF8B94, #FFD93D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const CampaignsSection = styled.section`
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
    background: linear-gradient(45deg, #FF8B94, #FFD93D);
  }
`;

const CampaignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CampaignCard = styled(motion.div)<{ $isActive: boolean }>`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  height: 400px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }

  ${props => props.$isActive && `
    grid-column: 1 / -1;
    height: 600px;
  `}
`;

const CampaignImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CampaignCard}:hover & {
    transform: scale(1.05);
  }
`;

const CampaignContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 2;
`;

const CampaignTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const CampaignDescription = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CampaignStats = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  text-align: center;

  span {
    display: block;
    &:first-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: #FFD93D;
    }
    &:last-child {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const campaigns = [
  {
    title: "Sustainable Fashion Campaign",
    image: "https://source.unsplash.com/random/1200x800?fashion,sustainable",
    description: "Created a viral social media campaign highlighting sustainable fashion practices, reaching millions of environmentally conscious consumers.",
    stats: {
      reach: "5.2M",
      engagement: "28%",
      shares: "125K",
      impressions: "8.5M"
    }
  },
  {
    title: "Food Delivery App Launch",
    image: "https://source.unsplash.com/random/1200x800?food,delivery",
    description: "Orchestrated a multi-platform launch campaign for a new food delivery app, focusing on lifestyle integration and user experience.",
    stats: {
      reach: "3.8M",
      engagement: "32%",
      shares: "95K",
      impressions: "6.2M"
    }
  },
  {
    title: "Tech Startup Rebranding",
    image: "https://source.unsplash.com/random/1200x800?technology,startup",
    description: "Led a complete brand transformation for a tech startup, including visual identity, messaging, and digital presence.",
    stats: {
      reach: "2.5M",
      engagement: "25%",
      shares: "78K",
      impressions: "4.1M"
    }
  }
];

const DigitalMarketingPortfolio2: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <Container>
      <BackgroundGradient />
      <Content>
        <Nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>CREATIVE</Logo>
          <NavItems>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#campaigns">Campaigns</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </NavItems>
        </Nav>

        <Hero>
          <HeroBackground />
          <HeroContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Crafting Digital Stories
            </Title>
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where creativity meets strategy to build compelling brand narratives
            </Subtitle>
          </HeroContent>
        </Hero>

        <CampaignsSection id="campaigns">
          <SectionTitle>Featured Campaigns</SectionTitle>
          <CampaignGrid>
            {campaigns.map((campaign, index) => (
              <CampaignCard
                key={index}
                $isActive={activeProject === index}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CampaignImage src={campaign.image} alt={campaign.title} />
                <CampaignContent>
                  <CampaignTitle>{campaign.title}</CampaignTitle>
                  <AnimatePresence>
                    {(activeProject === index || activeProject === null) && (
                      <CampaignDescription
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {campaign.description}
                      </CampaignDescription>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activeProject === index && (
                      <CampaignStats
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                      >
                        <StatItem>
                          <span>{campaign.stats.reach}</span>
                          <span>Reach</span>
                        </StatItem>
                        <StatItem>
                          <span>{campaign.stats.engagement}</span>
                          <span>Engagement</span>
                        </StatItem>
                        <StatItem>
                          <span>{campaign.stats.shares}</span>
                          <span>Shares</span>
                        </StatItem>
                        <StatItem>
                          <span>{campaign.stats.impressions}</span>
                          <span>Impressions</span>
                        </StatItem>
                      </CampaignStats>
                    )}
                  </AnimatePresence>
                </CampaignContent>
              </CampaignCard>
            ))}
          </CampaignGrid>
        </CampaignsSection>
      </Content>
    </Container>
  );
};

export default DigitalMarketingPortfolio2; 