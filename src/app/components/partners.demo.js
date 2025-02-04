"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Partners = ({ styles }) => {
  const sliderRef = useRef(null);
  const clonedContentRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const cloneContent = () => {
      if (!slider || clonedContentRef.current) return;
      clonedContentRef.current = true;

      const content = slider.innerHTML;
      slider.innerHTML += content;
    };

    const startAutoScroll = () => {
      if (!slider) return;

      const totalWidth = slider.scrollWidth / 2;
      scrollInterval = setInterval(() => {
        slider.scrollLeft += 5;
        if (slider.scrollLeft >= totalWidth) {
          slider.scrollLeft = 0;
        }
      }, 30);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    cloneContent();
    startAutoScroll();

    // Pause auto-scroll on hover
    const pauseScrollOnHover = () => stopAutoScroll();
    const resumeScrollAfterHover = () => startAutoScroll();

    // Event listeners for pausing and resuming auto-scroll on hover
    slider?.addEventListener("mouseenter", pauseScrollOnHover);
    slider?.addEventListener("mouseleave", resumeScrollAfterHover);

    return () => {
      // Cleanup on component unmount
      slider?.removeEventListener("mouseenter", pauseScrollOnHover);
      slider?.removeEventListener("mouseleave", resumeScrollAfterHover);
      stopAutoScroll();
    };
  }, []);

  return (
    <div className={styles.partners}>
      <div className={styles.inner}>
        <h2>Our Partners</h2>
        <div className={styles.ptns} ref={sliderRef}>
          {/* Partner logos */}
          <Image src={"/us-protech.webp"} alt="Partner Logo" width={138} height={43} />
          <Image src={"/solaris.webp"} alt="Partner Logo" width={60} height={41} />
          <Image src={"/windows.webp"} alt="Partner Logo" width={50} height={47} />
          <Image src={"/google-cloud.webp"} alt="Partner Logo" width={188} height={36} />
          <Image src={"/aix.webp"} alt="Partner Logo" width={50} height={50} />
          <Image src={"/azure.webp"} alt="Partner Logo" width={120} height={36} />
          <Image src={"/aws.webp"} alt="Partner Logo" width={59} height={42} />
          <Image src={"/unix.webp"} alt="Partner Logo" width={82} height={22} />
          <Image src={"/dolph.webp"} alt="Partner Logo" width={50} height={57} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
