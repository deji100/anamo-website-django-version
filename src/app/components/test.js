"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
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
    )
}

const TestimonialSlider = ({ styles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className={styles.slider}>
            <h2>Testimonials</h2>
            <div className={styles.testimonials}>
                {
                    testimonials.map(card => (
                        <TestCard key={card.author} styles={styles} card={card} />
                    ))
                }
            </div>
            <div className={styles.navigation}>
                <button className={styles.prev} onClick={handlePrev}>
                    ❮
                </button>
                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.active : ""
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                <button className={styles.next} onClick={handleNext}>
                    ❯
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
