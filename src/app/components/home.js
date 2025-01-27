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
import { learn_more_text } from "./data";
import { useEffect, useState, useRef } from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

export default function Home({ styles }) {
    const [popModal, setPopModal] = useState(false)
    const [url, setUrl] = useState(null)
    const vidRef = useRef(null)
    const [toggle, setToggle] = useState(false)
    const [started, setStarted] = useState(false)
    const [index, setIndex] = useState(1)
    const [values, setValues] = useState({first_name: "", last_name: "", company_name: "", email: "", phone: "", address: "" })

    const handlePrevNext = (type) => {
        setIndex((prev) =>
            type === "prev"
                ? (prev === 0 ? learn_more_text.length - 1 : prev - 1)
                : (prev === learn_more_text.length - 1 ? 0 : prev + 1)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(values)
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

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
        const interval = setInterval(() => {
            setIndex((prev) => (prev === learn_more_text.length - 1 ? 0 : prev + 1));
        }, 20000);

        return () => clearInterval(interval);
    }, [toggle])

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
                <Hero styles={styles} handleVideoPlay={handleVideoPlay} setToggle={setToggle} />
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

            <div className={toggle ? `${styles.learn_more} ${styles.active}` : `${styles.learn_more}`}>
                <div className={styles.inner}>
                    <div className={styles.close}>
                        <MdClose className={styles.icon} onClick={() => setToggle(false)} />
                    </div>

                    <div className={styles.nav}>
                        <MdArrowBackIos className={styles.icon} onClick={() => handlePrevNext("prev")} />
                        <MdArrowForwardIos className={styles.icon} onClick={() => handlePrevNext("next")} />
                    </div>

                    <div className={styles.modal}>
                        <h2>{learn_more_text[index].title}</h2>
                        <p>{learn_more_text[index].text}</p>
                    </div>
                </div>
            </div>

            <div className={started ? `${styles.form} ${styles.active}` : `${styles.form}`}>
                <div className={styles.inner}>
                    <h2>Begin Your Journey with Anamo!</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="First Name" name="first_name" value={values.first_name} onChange={handleChange} required />
                        <input type="text" placeholder="Last Name" name="last_name" value={values.last_name} onChange={handleChange} required />
                        <input type="text" placeholder="Company Name" name="company_name" value={values.company_name} onChange={handleChange} required />
                        <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} required />
                        <input type="tel" placeholder="Phone" name="phone" value={values.phone} onChange={handleChange} required />
                        <input type="text" placeholder="Address" name="address" value={values.address} onChange={handleChange} required />
                        <div className={styles.btns}>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setStarted(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <button className={styles.get_started} onClick={() => setStarted(prev => !prev)}>Get Started</button>
        </div>
    );
}