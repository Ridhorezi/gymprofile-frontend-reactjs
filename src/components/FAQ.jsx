import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => setIsShowing((prevState) => !prevState)}
    >
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p>{isShowing ? answer : ""}</p>
    </article>
  );
};

export default FAQ;
