"use client"

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState, useRef } from "react";

const Hero = ({ styles }) => {
  const textRef = useRef()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(
    `Worried About <span className="${styles.threats}">Cyber Threats</span>? We've Got You <span className="${styles.question_cover}">Covered.</span>`
  );

  useEffect(() => {
    const text = textRef.current
    const textTypingEffect = (element, text, setIndex) => {
      if (index === 0) {
        element.textContent = "";
      }

      element.textContent += text[index]

      if (index === text.length - 1) {
        return
      }

      setTimeout(() => {
        return textTypingEffect(element, text, setIndex(i => i + 1))
      }, 1000)
    }

    textTypingEffect(textRef, text, setIndex)

  }, [index])

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Image src={"/anamo-logo-img.webp"} className={styles.logo} alt="anamo-logo-image" width={150} height={20} />
          <Link href={"/"} className={styles.link} target="_blank">Login</Link>
        </nav>
        <div className={styles.question}>
          <h1 ref={textRef}></h1>

          <div className={styles.btns}>
            <Link href={"/"} className={styles.button}>
              Get Started
              <HiArrowLongRight className={styles.icon} />
            </Link>
            <Link href={"/"} className={styles.button}>
              DHS/CDM Video
            </Link>
          </div>
        </div>
        <Image className={styles.img} src={"/anamo-hero-img.webp"} alt="Anamo Hero Image" width={10000} height={10000} priority />
      </div>
    </section>
  )
}

export default Hero