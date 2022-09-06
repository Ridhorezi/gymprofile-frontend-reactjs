import React, { useState } from "react";
import { testimonials } from "../data";
import Card from "../UI/Card";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import SectionHead from "./SectionHead";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, avatar, quote } = testimonials[index];

  function prevTestimonial() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  function nextTestimonial() {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            className="testimonials_btn"
            onClick={() => prevTestimonial()}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials_btn"
            onClick={() => nextTestimonial()}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
