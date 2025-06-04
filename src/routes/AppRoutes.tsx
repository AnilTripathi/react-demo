import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home.tsx'));
const About = lazy(() => import('../pages/About.tsx'));
const User = lazy(() => import('../pages/User.tsx'));
const Contact = lazy(() => import('../pages/Contact.tsx'));
const NotFound = lazy(() => import('../pages/NotFound.tsx'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
