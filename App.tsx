import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Creche } from './pages/Creche';
import { Kindergarten } from './pages/Kindergarten';
import { Primary } from './pages/Primary';
import { JHS } from './pages/JHS';
import { Admissions } from './pages/Admissions';
import { News } from './pages/News';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="creche" element={<Creche />} />
          <Route path="kindergarten" element={<Kindergarten />} />
          <Route path="primary" element={<Primary />} />
          <Route path="jhs" element={<JHS />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="news" element={<News />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;