import React, { useState } from "react";

import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Vishakha.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "An aspiring web development intern.",
                    1000,
                    "A Final year Engineering Student.",
                    // 'I design and code beautifully simple things, and I love what I do.',
                    1000,
                    "A problem solver.",
                    1000,
                    "An innovative thinker.",
                    1000,
                    "A team player.",
                    1000,
                    "A quick learner.",
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  I'm running out of ideas...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... you can scroll down to see my projects now...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, my projects are really cool, go check them out!",
                    1000,
                    "You're uh...",
                    1000,
                    "You're uh... still here?",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",

                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/Vishakha.jpeg"
                alt="vish"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                }}
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
