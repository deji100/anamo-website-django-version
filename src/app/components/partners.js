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

      // Clone the content of the slider for seamless scrolling
      const content = slider.innerHTML;
      slider.innerHTML += content;
    };

    const startAutoScroll = () => {
      if (!slider) return;

      const totalWidth = slider.scrollWidth / 2; // Original content width
      scrollInterval = setInterval(() => {
        slider.scrollLeft += 2; // Adjust scroll speed
        if (slider.scrollLeft >= totalWidth) {
          // Reset to the start when reaching the cloned section
          slider.scrollLeft = 0;
        }
      }, 30);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    cloneContent();
    startAutoScroll();

    // Pause auto-scroll when the user interacts with the slider
    const pauseScrollOnInteraction = () => stopAutoScroll();

    // Resume auto-scroll when interaction ends
    const resumeScrollAfterInteraction = () => startAutoScroll();

    // Event listeners for pausing/resuming auto-scroll
    slider?.addEventListener("mousedown", pauseScrollOnInteraction);
    slider?.addEventListener("touchstart", pauseScrollOnInteraction);
    slider?.addEventListener("mouseup", resumeScrollAfterInteraction);
    slider?.addEventListener("touchend", resumeScrollAfterInteraction);

    return () => {
      // Cleanup on component unmount
      slider?.removeEventListener("mousedown", pauseScrollOnInteraction);
      slider?.removeEventListener("touchstart", pauseScrollOnInteraction);
      slider?.removeEventListener("mouseup", resumeScrollAfterInteraction);
      slider?.removeEventListener("touchend", resumeScrollAfterInteraction);
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
