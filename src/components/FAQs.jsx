import React from "react";
import { faqs } from "../data";
import { FaQuestion } from "react-icons/fa";
import SectionHead from "./SectionHead";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ question={question} answer={answer} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
