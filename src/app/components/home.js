"use client"

import Hero from "./hero";
import Partners from "./partners";
import IntroVid from "./vid-section";
import Suite from "./suite";
import Unique from "./unique";
import AnamoCDM from "./anamocdm";
import Dashboard from "./dashboard";
import CDM from "./cdm";
import Testimonials from "./testimonials";
import FAQS from "./faq";
import Footer from "./footer";
import { useEffect, useState, useRef } from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";

export default function Home({ styles }) {
    const [popModal, setPopModal] = useState(false)
    const [url, setUrl] = useState(null)
    const vidRef = useRef(null)

    const handleVideoPlay = (link) => {
        setUrl(link)
        setPopModal(prev => !prev)
    }

    const handleVideoClose = () => {
        setPopModal(false)
        setUrl(null)
        vidRef.current.pause();
        vidRef.current.currentTime = 0
    }

    useEffect(() => {
        if (url) {
            setTimeout(() => {
                vidRef.current.play()
            }, 1500);
        }
    }, [url])

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Hero styles={styles} handleVideoPlay={handleVideoPlay} />
                <Partners styles={styles} />
                <IntroVid styles={styles} handleVideoPlay={handleVideoPlay} />
                <Suite styles={styles} />
                <Unique styles={styles} />
                <AnamoCDM styles={styles} />
                <Dashboard styles={styles} />
                <CDM styles={styles} />
                <Testimonials styles={styles} />
                <FAQS styles={styles} />
                <Footer styles={styles} />
            </main>
            <div className={popModal ? `${styles.pop} ${styles.active}` : `${styles.pop}`}>
                <div className={styles.inner}>
                    <div className={styles.close}>
                        <MdOutlineCloseFullscreen className={styles.icon} onClick={handleVideoClose} />
                    </div>
                    <div className={styles.modal}>
                        <video
                            ref={vidRef}
                            playsInline
                            preload="true"
                            controls
                            src={url}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}