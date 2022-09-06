import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
        reprehenderit error molestias maxime consequatur mollitia, saepe alias
        consectetur placeat magnam?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="OurStoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              suscipit culpa aliquam corporis blanditiis natus sequi pariatur
              quos ab. Quia asperiores ab id sunt autem, iure sequi alias
              voluptatibus aspernatur, incidunt enim dolorum fugiat fuga, nulla
              quas eaque hic a dolore magni ullam iusto rerum voluptas eos
              eveniet? Omnis, neque!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              deleniti mollitia autem exercitationem ad neque quod iure
              veritatis unde modi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              tenetur.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              suscipit culpa aliquam corporis blanditiis natus sequi pariatur
              quos ab. Quia asperiores ab id sunt autem, iure sequi alias
              voluptatibus aspernatur, incidunt enim dolorum fugiat fuga, nulla
              quas eaque hic a dolore magni ullam iusto rerum voluptas eos
              eveniet? Omnis, neque!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              deleniti mollitia autem exercitationem ad neque quod iure
              veritatis unde modi?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="OurVisionImage" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="OurMissionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              suscipit culpa aliquam corporis blanditiis natus sequi pariatur
              quos ab. Quia asperiores ab id sunt autem, iure sequi alias
              voluptatibus aspernatur, incidunt enim dolorum fugiat fuga, nulla
              quas eaque hic a dolore magni ullam iusto rerum voluptas eos
              eveniet? Omnis, neque!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              deleniti mollitia autem exercitationem ad neque quod iure
              veritatis unde modi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              tenetur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
