import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketContext from './components/MarketContext';
import Advantage from './components/Advantage';
import LearningPath from './components/LearningPath';
import SkillsTools from './components/SkillsTools';
import Projects from './components/Projects';
import BatchProfile from './components/BatchProfile';
import FacultySlider from './components/FacultySlider';
import ReviewsSlider from './components/ReviewsSlider';
import CareerSupport from './components/CareerSupport';
import AdmissionDetails from './components/AdmissionDetails';
import Financing from './components/Financing';
import Cohorts from './components/Cohorts';
import FinalApply from './components/FinalApply';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="overview">
          <MarketContext />
        </section>

        <section id="advantage">
          <Advantage />
        </section>

        <section id="learning-path">
          <LearningPath />
        </section>

        <section id="details">
          <SkillsTools />
          <Projects />
          <BatchProfile />
          <FacultySlider />
        </section>

        <section id="reviews">
          <ReviewsSlider />
        </section>

        <section id="career">
          <CareerSupport />
        </section>

        <section id="admission">
          <AdmissionDetails />
          <Financing />
        </section>

        <section id="pricing">
          <Cohorts />
          <FinalApply />
        </section>

        <section id="faqs">
          <FAQs />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
