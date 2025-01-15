"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState, useRef } from "react";
import SlideX from "../animations/slideX";
import Slide from "../animations/slide";

const AnimatedText = ({ styles }) => {
  const textArray = ["Stop The Noise.", "Stop The Threats.", "Start The Protection."];
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current text being displayed
  const [typingIndex, setTypingIndex] = useState(0); // Track the character typing progress
  const textRef = useRef(null); // Ref to the DOM element for the text

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      const currentText = textArray[currentIndex];
      if (typingIndex <= currentText.length) {
        textElement.innerHTML = currentText.slice(0, typingIndex + 1); // Update displayed text
        const typingTimeout = setTimeout(() => {
          setTypingIndex((prev) => prev + 1); // Increment typing index
        }, 50); // Typing speed
        return () => clearTimeout(typingTimeout); // Clear timeout
      }
    }
  }, [typingIndex, currentIndex, textArray]);

  useEffect(() => {
    // Handle switching to the next text and reset typing
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length); // 1%3 = 1, 2%3 = 2, 3%3 = 0
      setTypingIndex(0); // Reset typing index
    }, 5000); // Switch text every 5 seconds

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div className={styles.floatingTexts}>
      <h2 ref={textRef}></h2>
    </div>
  );
};


const Hero = ({ styles, handleVideoPlay }) => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  const text = `Concerned About Cyber Threats? We Provide Powerful Protection.`;

  useEffect(() => {
    const textElement = textRef.current;

    const textTypingEffect = (element, text, setIndex) => {
      if (index === 0) {
        element.innerHTML = "";
      }

      let currentText = text.slice(0, index + 1);

      if (currentText.includes("Protection") && !currentText.includes("<span")) {
        currentText = currentText.replace(
          "Protection",
          `<span class="${styles.covered}">Protection</span>`
        );
      }

      element.innerHTML = currentText;

      if (index === text.length - 1) {
        return;
      }

      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 50);
    };

    textTypingEffect(textElement, text, setIndex);
  }, [index]);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <Image
              src={"/anamo-logo-img.webp"}
              className={styles.logo}
              alt="anamo-logo-image"
              width={150}
              height={20}
            />
            <Link href={"https://app.anamo.io/login/"} className={styles.link} target="_blank">
              Login
            </Link>
          </nav>
          <div className={styles.question}>
            <SlideX>
              <h1 ref={textRef}></h1>
            </SlideX>
            <Slide>
              <AnimatedText styles={styles} />
            </Slide>
            <Slide>
              <div className={styles.btns}>
                <div className={styles.link}>
                  <Link href={"https://app.anamo.io/login/"} target="_blank" className={styles.button}>
                    Get Started
                    <HiArrowLongRight className={styles.icon} />
                  </Link>
                  <p>Monitor vulnerabilities and implement cybersecurity solutions effectively with Anamo. Click to secure your systems now!</p>
                </div>
                <div className={styles.link}>
                  <button onClick={() => handleVideoPlay("https://amorserv-assets.s3.us-east-1.amazonaws.com/amorserv-solutions/web/testvid1.mp4")} className={styles.button}>
                    CISA/DHS/CDM
                  </button>
                  <p>The CISA/DHS Continuous Diagnostics and Mitigation (CDM) program strengthens federal cybersecurity through real-time risk monitoring and management.</p>
                </div>
                <div className={styles.link}>
                  <button onClick={() => handleVideoPlay("https://amorserv-assets.s3.us-east-1.amazonaws.com/amorserv-solutions/web/testvid3.mp4")} className={styles.button}>
                    ANAMO CDM
                  </button>
                  <p>Streamlined Cybersecurity Management and Defense.</p>
                </div>
              </div>
            </Slide>
          </div>
          <Image
            className={styles.img}
            src={"/anamo-hero-img.webp"}
            alt="Anamo Hero Image"
            width={10000}
            height={10000}
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
