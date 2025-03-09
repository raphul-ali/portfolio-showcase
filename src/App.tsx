import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

// Web Developer Portfolios
import WebDevPortfolio1 from './pages/portfolios/WebDevPortfolio1';
import WebDevPortfolio2 from './pages/portfolios/WebDevPortfolio2';

// Software Developer Portfolios
import SoftwareDevPortfolio1 from './pages/portfolios/SoftwareDevPortfolio1';
import SoftwareDevPortfolio2 from './pages/portfolios/SoftwareDevPortfolio2';

// Digital Marketer Portfolios
import DigitalMarketingPortfolio1 from './pages/portfolios/DigitalMarketingPortfolio1';
import DigitalMarketingPortfolio2 from './pages/portfolios/DigitalMarketingPortfolio2';

// Banker Portfolios
import BankerPortfolio1 from './pages/portfolios/BankerPortfolio1';
import BankerPortfolio2 from './pages/portfolios/BankerPortfolio2';

// Teacher Portfolios
import TeacherPortfolio1 from './pages/portfolios/TeacherPortfolio1';
import TeacherPortfolio2 from './pages/portfolios/TeacherPortfolio2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Web Developer Routes */}
        <Route path="/web-dev-1" element={<WebDevPortfolio1 />} />
        <Route path="/web-dev-2" element={<WebDevPortfolio2 />} />
        
        {/* Software Developer Routes */}
        <Route path="/software-dev-1" element={<SoftwareDevPortfolio1 />} />
        <Route path="/software-dev-2" element={<SoftwareDevPortfolio2 />} />
        
        {/* Digital Marketer Routes */}
        <Route path="/digital-marketing-1" element={<DigitalMarketingPortfolio1 />} />
        <Route path="/digital-marketing-2" element={<DigitalMarketingPortfolio2 />} />
        
        {/* Banker Routes */}
        <Route path="/banker-1" element={<BankerPortfolio1 />} />
        <Route path="/banker-2" element={<BankerPortfolio2 />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher-1" element={<TeacherPortfolio1 />} />
        <Route path="/teacher-2" element={<TeacherPortfolio2 />} />
      </Routes>
    </Router>
  );
}

export default App;
