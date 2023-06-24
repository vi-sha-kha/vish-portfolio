import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/Vishakha.jpeg"
              alt="man-svgrepo"
              style={{
                borderRadius: "100%",
              }}
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Vishakha Chaudhary</strong>. I am a
              Final year engineering student pursuing my Bachelors degree in
              Computer Engineering. I am looking forward to an opportunity for
              internship in the web development sector.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I am currently learning javascript and React js. I have been
              focusing making projects as I strongly believe in project based
              learning and "Learning by Doing". Hence, I am trying to implement
              that in my projects as far as applicable.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              development.
              <div className="tagline2">
                I am familiar with the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
