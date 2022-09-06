import React from "react";
import "./trainers.css";
import Header from "../../components/Header";
import { trainers } from "../../data";
import HeaderImage from "../../images/header_bg_5.jpg";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quia
        blanditiis doloremque? Suscipit tenetur sit consectetur, nesciunt maxime
        delectus harum?
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, name, image, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  {
                    icon: <AiFillInstagram />,
                    Link: socials[0],
                  },
                  {
                    icon: <AiOutlineTwitter />,
                    Link: socials[1],
                  },
                  {
                    icon: <FaFacebookF />,
                    Link: socials[2],
                  },
                  {
                    icon: <FaLinkedin />,
                    Link: socials[3],
                  },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
      ;
    </>
  );
};

export default Trainers;
