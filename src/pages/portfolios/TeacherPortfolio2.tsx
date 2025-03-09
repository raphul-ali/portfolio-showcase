import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
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

const Nav = styled(motion.nav)`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
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
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const Section = styled.section`
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
    background: linear-gradient(45deg, #7c3aed, #ec4899);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.div)<{ $isActive?: boolean }>`
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
    background: linear-gradient(45deg, #7c3aed, #ec4899);
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

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillTitle = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`;

const SkillProgress = styled.div<{ $level: number }>`
  width: ${props => props.$level}%;
  height: 100%;
  background: linear-gradient(45deg, #7c3aed, #ec4899);
  border-radius: 2px;
`;

const digitalSkills = [
  {
    icon: "💻",
    title: "Virtual Learning",
    level: 95
  },
  {
    icon: "🎥",
    title: "Video Production",
    level: 85
  },
  {
    icon: "📱",
    title: "EdTech Tools",
    level: 90
  },
  {
    icon: "🤝",
    title: "Online Engagement",
    level: 92
  },
  {
    icon: "📊",
    title: "Data Analytics",
    level: 88
  },
  {
    icon: "🎮",
    title: "Gamification",
    level: 85
  }
];

const courses = [
  {
    title: "Digital Storytelling",
    content: "Interactive course combining multimedia elements to enhance student engagement in literature and creative writing."
  },
  {
    title: "Virtual Science Lab",
    content: "Immersive online laboratory experiences using AR/VR technology for hands-on learning in science."
  },
  {
    title: "Global Classroom",
    content: "Collaborative projects connecting students worldwide through virtual exchange programs."
  }
];

const achievements = [
  {
    title: "EdTech Innovation Award",
    content: "Recognized for pioneering virtual reality applications in classroom teaching."
  },
  {
    title: "Digital Learning Lead",
    content: "Spearheaded the school's transition to hybrid learning during the pandemic."
  },
  {
    title: "Online Course Creator",
    content: "Developed successful online courses with over 10,000 student enrollments."
  }
];

const TeacherPortfolio2: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <Container>
      <BackgroundGradient />
      <Content>
        <Nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>DIGITAL EDUCATOR</Logo>
          <NavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#courses">Courses</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
          </NavLinks>
        </Nav>

        <Hero>
          <HeroContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Modern Education Reimagined
            </Title>
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming learning through technology and innovation
            </Subtitle>
          </HeroContent>
        </Hero>

        <Section id="skills">
          <SectionTitle>Digital Teaching Skills</SectionTitle>
          <SkillsGrid>
            {digitalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillLevel>
                  <SkillProgress $level={skill.level} />
                </SkillLevel>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Section>

        <Section id="courses">
          <SectionTitle>Interactive Courses</SectionTitle>
          <Grid>
            {courses.map((course, index) => (
              <Card
                key={index}
                $isActive={activeCard === index}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardTitle>{course.title}</CardTitle>
                <CardContent>{course.content}</CardContent>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section id="achievements">
          <SectionTitle>Digital Achievements</SectionTitle>
          <Grid>
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardTitle>{achievement.title}</CardTitle>
                <CardContent>{achievement.content}</CardContent>
              </Card>
            ))}
          </Grid>
        </Section>
      </Content>
    </Container>
  );
};

export default TeacherPortfolio2; 