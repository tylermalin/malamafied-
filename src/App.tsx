import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GetStartedPage from './pages/GetStartedPage';
import InvestPage from './pages/InvestPage';
import InvestorJoinPage from './pages/InvestorJoinPage';
import FarmerJoinPage from './pages/FarmerJoinPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import PressPage from './pages/PressPage';
import BlogPage from './pages/BlogPage';
import GreenpaperPage from './pages/GreenpaperPage';
import DocsPage from './pages/DocsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/get-started" element={<GetStartedPage />} />
      <Route path="/invest" element={<InvestPage />} />
      <Route path="/join/investor" element={<InvestorJoinPage />} />
      <Route path="/join/farmer" element={<FarmerJoinPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/press" element={<PressPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/greenpaper" element={<GreenpaperPage />} />
      <Route path="/docs" element={<DocsPage />} />
    </Routes>
  );
}

export default App;