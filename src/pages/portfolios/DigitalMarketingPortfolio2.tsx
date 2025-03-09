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

const CampaignStats = styled.div`
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

const CampaignMetrics = styled.div`
  margin-top: 1.5rem;
`;

const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const StatLabel = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

interface CampaignStat {
  value: string;
  label: string;
}

interface Campaign {
  title: string;
  description: string;
  stats: CampaignStat[];
  image: string;
}

const campaigns: Campaign[] = [
  {
    title: "Social Media Growth Campaign",
    description: "Increased brand awareness and engagement through targeted social media campaigns.",
    stats: [
      { value: "500K+", label: "Reach" },
      { value: "25%", label: "Engagement" },
      { value: "10K+", label: "Shares" },
      { value: "2M+", label: "Impressions" }
    ],
    image: "https://source.unsplash.com/random/1200x800?social,media"
  },
  {
    title: "Content Marketing Strategy",
    description: "Developed and executed comprehensive content strategy across multiple platforms.",
    stats: [
      { value: "300K+", label: "Views" },
      { value: "20%", label: "Conversion" },
      { value: "5K+", label: "Leads" },
      { value: "1.5M+", label: "Reach" }
    ],
    image: "https://source.unsplash.com/random/1200x800?content,marketing"
  },
  {
    title: "Email Marketing Campaign",
    description: "Optimized email campaigns resulting in increased open rates and conversions.",
    stats: [
      { value: "45%", label: "Open Rate" },
      { value: "15%", label: "CTR" },
      { value: "8K+", label: "Subscribers" },
      { value: "30%", label: "Growth" }
    ],
    image: "https://source.unsplash.com/random/1200x800?email,marketing"
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
                  {(activeProject === index || activeProject === null) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CampaignDescription>
                        {campaign.description}
                      </CampaignDescription>
                    </motion.div>
                  )}
                  <CampaignMetrics>
                    {activeProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CampaignStats>
                          {campaign.stats.map((stat, statIndex) => (
                            <StatItem key={statIndex}>
                              <StatValue>{stat.value}</StatValue>
                              <StatLabel>{stat.label}</StatLabel>
                            </StatItem>
                          ))}
                        </CampaignStats>
                      </motion.div>
                    )}
                  </CampaignMetrics>
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