import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: #f4f1ec;
  color: #2c2c2c;
`;

const Header = styled.header`
  padding: 4rem 2rem;
  text-align: center;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const Bio = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: #666;
`;

const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background: #fff;
`;

const ArtworkCard = styled(motion.div)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover img {
    transform: scale(1.05);
  }
`;

const ArtworkImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ArtworkInfo = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ArtworkCard}:hover & {
    transform: translateY(0);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const artworks = [
  {
    title: 'Abstract Harmony',
    medium: 'Oil on Canvas',
    year: '2024',
    image: 'https://source.unsplash.com/random/800x800?abstract-art'
  },
  {
    title: 'Urban Dreams',
    medium: 'Mixed Media',
    year: '2023',
    image: 'https://source.unsplash.com/random/800x800?street-art'
  },
  {
    title: 'Nature\'s Dance',
    medium: 'Watercolor',
    year: '2024',
    image: 'https://source.unsplash.com/random/800x800?watercolor'
  },
  {
    title: 'Digital Metamorphosis',
    medium: 'Digital Art',
    year: '2023',
    image: 'https://source.unsplash.com/random/800x800?digital-art'
  },
  {
    title: 'Sculptural Forms',
    medium: 'Bronze',
    year: '2024',
    image: 'https://source.unsplash.com/random/800x800?sculpture'
  },
  {
    title: 'Ethereal Light',
    medium: 'Photography',
    year: '2023',
    image: 'https://source.unsplash.com/random/800x800?light-art'
  }
];

const ArtistPortfolio: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<null | typeof artworks[0]>(null);

  return (
    <Container>
      <Header>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Alex Rivers
        </Name>
        <Bio
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contemporary artist exploring the intersection of traditional and digital mediums.
          My work examines the relationship between nature, technology, and human experience.
        </Bio>
      </Header>

      <Gallery>
        {artworks.map((artwork, index) => (
          <ArtworkCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelectedArtwork(artwork)}
          >
            <ArtworkImage src={artwork.image} alt={artwork.title} />
            <ArtworkInfo>
              <h3>{artwork.title}</h3>
              <p>{artwork.medium}, {artwork.year}</p>
            </ArtworkInfo>
          </ArtworkCard>
        ))}
      </Gallery>

      {selectedArtwork && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedArtwork(null)}
        >
          <ModalContent
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <CloseButton onClick={() => setSelectedArtwork(null)}>×</CloseButton>
            <ModalImage src={selectedArtwork.image} alt={selectedArtwork.title} />
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ArtistPortfolio; 