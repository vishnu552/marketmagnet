import React from "react";
import About from "../components/About";
import TeamMember from "../components/TeamMember";
import AboutSlider from "../components/aboutpage";

function AboutPage() {
  return (
    <div className="mt-20">
      <AboutSlider/>
      <About />
      {/* <TeamMember /> */}
    </div>
  );
}

export default AboutPage;
