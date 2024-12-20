"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState, useRef } from "react";
import SlideX from "../animations/slideX";
import Slide from "../animations/slide";

const Hero = ({ styles }) => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  // The full text with the word "Covered" to style it dynamically
  // const text = `Worried About Cyber Threats? We've Got You Covered`;
  const text = `Think your system is secure? Let us be your Shield against cyber threats.`;

  useEffect(() => {
    const textElement = textRef.current;

    // Function to handle typing effect with word "Covered" styling
    const textTypingEffect = (element, text, setIndex) => {
      if (index === 0) {
        element.innerHTML = ""; // Reset the content when starting
      }

      // Add one character at a time to the element while checking for the word "Covered"
      let currentText = text.slice(0, index + 1); // Get the current part of the text

      // Check if "Covered" is part of the current text and style it
      if (currentText.includes("Shield") && !currentText.includes("<span")) {
        // Wrap "Covered" in a span with the specific class to style it
        currentText = currentText.replace(
          "Shield",
          `<span class="${styles.covered}">Shield</span>`
        );
      }

      element.innerHTML = currentText;

      if (index === text.length - 1) {
        return; // Stop once we've finished the text
      }

      // Continue the typing effect with a timeout
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1); // Increment index
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
            {/* Text container to render the typed effect */}
            <SlideX>
              <h1 ref={textRef}></h1>
            </SlideX>
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
                  <Link href={"https://youtu.be/ysYdSxBuUBg"} target="_blank" className={styles.button}>
                    DHS/CDM Video
                  </Link>
                  <p>DHS/CDM stands for the <b>{"Department of Homeland Security's Continuous Diagnostics and Mitigation"}</b> program, aimed at enhancing federal cybersecurity by monitoring and managing risks in real time.</p>
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
