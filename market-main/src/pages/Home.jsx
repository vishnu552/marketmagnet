import React, { useState } from "react";
import ImageSlider from "../components/slider";
import PartnerSlider from "../components/partnerSlider";
import UserReviews from "../components/userReviews";
import CompanyLogo from "../components/companyLogo";
import ProductLogo from "../components/Services";
import Why from "../components/why";
import About from "../components/About";
import Questions from "../components/Questions";
import data from "../components/QuestionData";
import Slash from "../components/slash";
import Services from "../components/Services";
import Form from "../components/form";
function Home() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <div>
      <ImageSlider />
      <div className="landing_page  w-full mt-20 flex justify-center items-center">
        <About />
      </div>

      {/* slash page come after service page */}
      <Slash />
      <Why />
      <UserReviews />
      <Services />
      <CompanyLogo />
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </div>
  );
}

export default Home;
