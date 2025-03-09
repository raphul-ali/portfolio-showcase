import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  color: white;
`;

const Header = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://source.unsplash.com/random/1920x1080?photography') center/cover;
  text-align: center;
  padding: 2rem;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 200;
  letter-spacing: 0.5em;
  text-transform: uppercase;
`;

const Title = styled(motion.p)`
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 2rem;
`;

const Gallery = styled.section`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  background: #111;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: translateY(0);
  }
`;

const Contact = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #000;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

const images = [
  {
    url: 'https://source.unsplash.com/random/600x600?portrait',
    title: 'Portrait Photography'
  },
  {
    url: 'https://source.unsplash.com/random/600x600?landscape',
    title: 'Landscape Photography'
  },
  {
    url: 'https://source.unsplash.com/random/600x600?wedding',
    title: 'Wedding Photography'
  },
  {
    url: 'https://source.unsplash.com/random/600x600?street',
    title: 'Street Photography'
  },
  {
    url: 'https://source.unsplash.com/random/600x600?architecture',
    title: 'Architecture Photography'
  },
  {
    url: 'https://source.unsplash.com/random/600x600?nature',
    title: 'Nature Photography'
  }
];

const PhotographerPortfolio = () => {
  return (
    <Container>
      <Header>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Jane Doe
        </Name>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Professional Photographer
        </Title>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button>View Portfolio</Button>
        </motion.div>
      </Header>

      <Gallery>
        {images.map((image, index) => (
          <ImageContainer
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Image src={image.url} alt={image.title} />
            <ImageOverlay>
              <h3>{image.title}</h3>
            </ImageOverlay>
          </ImageContainer>
        ))}
      </Gallery>

      <Contact>
        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </Button>
      </Contact>
    </Container>
  );
};

export default PhotographerPortfolio; 