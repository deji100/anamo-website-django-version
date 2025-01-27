"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState, useRef } from "react";
import SlideX from "../animations/slideX";
import Slide from "../animations/slide";

const AnimatedText = ({ styles, textArray }) => {
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
        }, 50);
        return () => clearTimeout(typingTimeout);
      }
    }
  }, [typingIndex, currentIndex, textArray]);

  useEffect(() => {
    // Handle switching to the next text and reset typing
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length); // 1%3 = 1, 2%3 = 2, 3%3 = 0
      setTypingIndex(0); // Reset typing index
    }, 3000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div className={styles.floatingTexts}>
      <h2 ref={textRef}></h2>
    </div>
  );
};


const Hero = ({ styles, handleVideoPlay, setToggle }) => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  const text = `Are You Ready for Simply Superior Cybersecurity? \nGet Anamo! It Delivers Enterprise “CDM” Today!`;

  useEffect(() => {
    const textElement = textRef.current;

    if (!textElement || index >= text.length) return;

    const currentText = text.slice(0, index + 1).replace(
      "“CDM”",
      `<span class="${styles.covered}">“CDM”</span>`
    );

    textElement.innerHTML = currentText.replace(/\n/g, "<br />");

    const timer = setTimeout(() => setIndex((prev) => prev + 1), 50);

    return () => clearTimeout(timer);
  }, [index, text]);

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
          <div className={styles.question_container}>
            <div className={styles.question}>
              <SlideX>
                <h1 ref={textRef}></h1>
              </SlideX>

              <Slide>
                <h2>What is CDM and What Does CDM Do?</h2>
                <br />
                <div className={styles.btns}>
                  <div className={styles.link}>
                    <button onClick={() => handleVideoPlay("https://amorserv-assets.s3.us-east-1.amazonaws.com/amorserv-solutions/web/testvid3.mp4")} className={styles.button}>
                      ANAMO Overview
                    </button>
                    <p>Enjoy this short animation and overview of Anamo, a powerful Cybersecurity functionality found in Continuous Diagnostic & Mitigation “CDM” platforms</p>
                  </div>
                  <div className={styles.link}>
                    <button onClick={() => handleVideoPlay("https://amorserv-assets.s3.us-east-1.amazonaws.com/amorserv-solutions/web/testvid1.mp4")} className={styles.button}>
                      CISA/DHS/CDM
                    </button>
                    <p>The CISA/DHS Continuous Diagnostics and Mitigation (CDM) program strengthens federal cybersecurity through real-time risk monitoring and management.</p>
                  </div>
                  <div className={styles.link}>
                    <button onClick={() => handleVideoPlay("https://amorserv-assets.s3.us-east-1.amazonaws.com/amorserv-solutions/web/testvid4.mp4")} className={styles.button}>
                      SEE ANAMO CDM
                    </button>
                    <p>Where SIEM, EPP, ASM, EDR, Vul-Scan, Forensics and More, all come together in a Single User-Interface that’s Automated, Always-On, Always Scanning and Ready to Alert You About Critical “Hard-To-Detect” Cybersecurity Risk.</p>
                  </div>
                </div>
              </Slide>

              <Slide>
                <button className={styles.learn_more_anamo} onClick={() => setToggle(true)}>
                  Learn more about Anamo here
                  <HiArrowLongRight className={styles.icon} />
                </button>
              </Slide>

              <Slide>
                <AnimatedText styles={styles} textArray={["Stop The Noise.", "Stop The Adversary.", "Stop The Dwell-Time.", "Stop The Scheduling.", "Start The Detection.", "Start The Forensics.", "Start The Logic.", 'Start The "CDM"']} />
              </Slide>
            </div>
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
