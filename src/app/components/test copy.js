"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { testimonials } from "./data";

const TestCard = ({ styles, card }) => {
    return (
        <div className={styles.card}>
            <div className={styles.details}>
                <div className={styles.quote}>❝</div>
                <p>{card.text}</p>
                <h5>{card.author}</h5>
            </div>
            <div className={styles.img}>
                <Image src={card?.img} alt="Customer Profile Pic" width={1000} height={1000} />
            </div>
        </div>
    );
};

const TestimonialSlider = ({ styles }) => {
    const sliderRef = useRef(null);
    const clonedContentRef = useRef(false);
    let scrollInterval = null;

    // Start auto-scroll functionality
    const startAutoScroll = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        scrollInterval = setInterval(() => {
            slider.scrollLeft += 2; // Adjust speed
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                // Reset to the start when reaching the cloned section
                slider.scrollLeft = 0;
            }
        }, 30);
    };

    // Stop auto-scroll functionality
    const stopAutoScroll = () => {
        clearInterval(scrollInterval);
    };

    useEffect(() => {
        const slider = sliderRef.current;

        const cloneContent = () => {
            if (!slider || clonedContentRef.current) return;
            clonedContentRef.current = true;

            // Clone content for seamless looping
            const content = slider.innerHTML;
            slider.innerHTML += content;
        };

        cloneContent();
        startAutoScroll();

        // Pause auto-scroll on user interaction
        const pauseScrollOnInteraction = () => stopAutoScroll();

        // Resume auto-scroll after interaction ends
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
        <div className={styles.slider}>
            <h2>Testimonials</h2>
            <div className={styles.testimonials} ref={sliderRef}>
                {testimonials.map((card, index) => (
                    <TestCard key={index} styles={styles} card={card} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
