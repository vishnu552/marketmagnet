import React from "react";
import Question from "./Question";

function Questions({ questions, activeId, toggleQuestion }) {
  return (
    <section
      id="portfolio"
      className="w-full mx-auto my-16 px-20 py-10 gap-12 bg-white"data-aos="fade-up"
    >
      <h3 className="mb-12 font-medium leading-5 text-6xl text-bold text-center text-[#3a41bd] tracking-wider">
      Frequently asked questions
      </h3>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}

export default Questions;
