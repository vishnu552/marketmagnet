import React, { useState } from "react";
import ImageSlider from "../components/slider";
import PartnerSlider from "../components/partnerSlider";
import UserReviews from "../components/userReviews";
import CompanyLogo from "../components/companyLogo";
import ProductLogo from "../components/Services";
import Insure from "../components/insure";
import Why from "../components/TeamMember";
import About from "../components/About";
import Questions from "../components/Questions";
import data from "../components/QuestionData";
import Slash from "../components/slash";
import Services from "../components/Services";
import Form from "../components/form";
import State from "../components/States";
import Range from "../components/Range";
import faqq from "../components/faqq";
 import LoginSingup from "../components/LoginSingup";
// import Testting from "../components/testting";
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
      {/* testting */}
      {/* <Testting/> */}
      <State />
      <Range/> 
      <Insure />
      <Slash />
      {/* <UserReviews /> */}
      <Services />
      {/* <CompanyLogo /> */}
        {/* <LoginSingup/>   */}
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </div>
  );
}

export default Home;
