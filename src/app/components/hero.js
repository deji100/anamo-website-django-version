"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState, useRef } from "react";
import SlideX from "../animations/slideX";
import Slide from "../animations/slide";

const Hero = ({ styles, handleVideoPlay }) => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  // const text = `Worried About Cyber Threats? We've Got You Covered`;
  // const text = `Think your system is secure? Let us be your Shield against cyber threats.`;
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
              <div className={styles.btns}>
                <div className={styles.link}>
                  <Link href={"https://app.anamo.io/login/"} target="_blank" className={styles.button}>
                    Get Started
                    <HiArrowLongRight className={styles.icon} />
                  </Link>
                  <p>Monitor vulnerabilities and implement cybersecurity solutions effectively with Anamo. Click to secure your systems now!</p>
                </div>
                <div className={styles.link}>
                  {/* <Link href={"https://youtu.be/ysYdSxBuUBg"} target="_blank" className={styles.button}>
                    DHS/CDM Video
                  </Link> */}
                  <button onClick={() => handleVideoPlay("https://amorserv-assets.s3.us-east-1.amazonaws.com/amorserv-solutions/web/testvid1.mp4")} className={styles.button}>
                    DHS/CDM Video
                  </button>
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
