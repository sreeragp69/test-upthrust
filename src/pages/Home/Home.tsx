import React from "react";
import LandingPage from "../../components/Landing/LandingPage";
import AboutSection from "../../components/AboutSection/AboutSection";
import { FeatureHighlights } from "../../components/FeatureHighlights/FeatureHighlights";
import CourseSection from "../../components/CourseSection/CourseSection";
import WhyUs from "../../components/WhyUs/WhyUs";
import LearnLatest from "../../components/LearnLatest/LearnLatest";
import UpthrustAchievement from "../../components/UpthrustAchievement/UpthrustAchievement";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import CentreSection from "../../components/CentreSection/CentreSection";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <LandingPage />
      <AboutSection />
      <FeatureHighlights />
      {/* <CourseSection /> */}
      <WhyUs />
      <LearnLatest />
      <UpthrustAchievement />
      {/* <TestimonialsSection /> */}
      <BlogSection />
      <CentreSection />
      {/* <Subscribe /> */}
    </>
  );
};

export default Home;
