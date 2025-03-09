import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PhotographerPortfolio from './pages/portfolios/PhotographerPortfolio';
import DeveloperPortfolio from './pages/portfolios/DeveloperPortfolio';
import DesignerPortfolio from './pages/portfolios/DesignerPortfolio';
import ArtistPortfolio from './pages/portfolios/ArtistPortfolio';
import WriterPortfolio from './pages/portfolios/WriterPortfolio';
import ArchitectPortfolio from './pages/portfolios/ArchitectPortfolio';
import MusicianPortfolio from './pages/portfolios/MusicianPortfolio';
import ConsultantPortfolio from './pages/portfolios/ConsultantPortfolio';
import ChefPortfolio from './pages/portfolios/ChefPortfolio';
import FilmmakerPortfolio from './pages/portfolios/FilmmakerPortfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/photographer" element={<PhotographerPortfolio />} />
        <Route path="/developer" element={<DeveloperPortfolio />} />
        <Route path="/designer" element={<DesignerPortfolio />} />
        <Route path="/artist" element={<ArtistPortfolio />} />
        <Route path="/writer" element={<WriterPortfolio />} />
        <Route path="/architect" element={<ArchitectPortfolio />} />
        <Route path="/musician" element={<MusicianPortfolio />} />
        <Route path="/consultant" element={<ConsultantPortfolio />} />
        <Route path="/chef" element={<ChefPortfolio />} />
        <Route path="/filmmaker" element={<FilmmakerPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
