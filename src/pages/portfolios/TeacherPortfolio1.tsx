import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  color: #333;
  font-family: 'Georgia', serif;
`;

const Nav = styled.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 1rem;
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
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  margin-top: 60px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 2rem;
  font-style: italic;
`;

const Quote = styled(motion.blockquote)`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 4px solid #3498db;
`;

const Section = styled.section`
  padding: 6rem 10%;
  background: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
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
    background: #3498db;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #3498db;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
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
    background: #3498db;
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
    background: #3498db;
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
  color: #3498db;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
`;

const philosophies = [
  {
    title: "Student-Centered Learning",
    content: "Creating an environment where students are active participants in their learning journey, fostering critical thinking and independence."
  },
  {
    title: "Inclusive Education",
    content: "Ensuring every student feels valued and supported, adapting teaching methods to accommodate diverse learning styles and needs."
  },
  {
    title: "Growth Mindset",
    content: "Encouraging students to view challenges as opportunities for growth and learning, developing resilience and perseverance."
  }
];

const experience = [
  {
    year: "2018 - Present",
    title: "Lead English Teacher",
    description: "Developing and implementing innovative curriculum for advanced placement English courses. Mentoring new teachers and leading department initiatives."
  },
  {
    year: "2015 - 2018",
    title: "English Teacher",
    description: "Created engaging lesson plans that improved student engagement and test scores by 25%. Integrated technology into classroom instruction."
  },
  {
    year: "2013 - 2015",
    title: "Student Teacher",
    description: "Assisted in classroom management and lesson planning. Developed strong foundations in educational theory and practice."
  }
];

const achievements = [
  {
    title: "Teacher of the Year 2020",
    content: "Recognized for excellence in teaching and student engagement."
  },
  {
    title: "Published Educator",
    content: "Multiple articles published in leading educational journals on innovative teaching methods."
  },
  {
    title: "Department Lead",
    content: "Successfully led the English department through curriculum modernization."
  }
];

const TeacherPortfolio1: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo>EDUCATOR</Logo>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#philosophy">Philosophy</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#achievements">Achievements</NavLink>
        </NavLinks>
      </Nav>

      <Hero>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Inspiring Minds, Shaping Futures
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dedicated English Teacher & Educational Leader
          </Subtitle>
          <Quote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            "Education is not the filling of a pail, but the lighting of a fire."
            - W.B. Yeats
          </Quote>
        </HeroContent>
      </Hero>

      <Section id="philosophy">
        <SectionTitle>Teaching Philosophy</SectionTitle>
        <Grid>
          {philosophies.map((philosophy, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardTitle>{philosophy.title}</CardTitle>
              <CardContent>{philosophy.content}</CardContent>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section id="experience">
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
      </Section>

      <Section id="achievements">
        <SectionTitle>Achievements</SectionTitle>
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
    </Container>
  );
};

export default TeacherPortfolio1; 