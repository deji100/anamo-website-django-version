"use client"

import styles from "../page.module.css";
const { default: Footer } = require("../components/footer")
const { default: Hero } = require("../components/hero")
import { learn_more_text } from "../components/data";
import { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Oval } from 'react-loader-spinner'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Enquire = () => {
    const [popModal, setPopModal] = useState(false)
    const [url, setUrl] = useState(null)
    const vidRef = useRef(null)
    const [toggle, setToggle] = useState(false)
    const [started, setStarted] = useState(true)
    const [submit, setSubmit] = useState(false)
    const [index, setIndex] = useState(1)
    const [values, setValues] = useState({ first_name: "", last_name: "", company_name: "", email: "", phone_number: "", address: "" })
    const router = useRouter(); // Next.js Router

    const handlePrevNext = (type) => {
        setIndex((prev) =>
            type === "prev"
                ? (prev === 0 ? learn_more_text.length - 1 : prev - 1)
                : (prev === learn_more_text.length - 1 ? 0 : prev + 1)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!values.first_name || !values.last_name || !values.company_name || !values.email || !values.phone_number || !values.address) {
            setSubmit(false)
            return;
        }

        setSubmit(true)

        try {
            const response = await emailjs.send(
                `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                {
                    to_email: `${process.env.NEXT_PUBLIC_TO_EMAIL}`,
                    from_name: values.first_name + " " + values.last_name,
                    from_email: values.email,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    company_name: values.company_name,
                    email: values.email,
                    phone_number: values.phone_number,
                    address: values.address,
                },
                `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
            );

            // Check if the response contains a successful status
            if (response.status === 200) {
                toast.success("Form submitted successfully!");

                // Reset form values
                setValues({
                    first_name: "",
                    last_name: "",
                    company_name: "",
                    email: "",
                    phone_number: "",
                    address: "",
                });
                setStarted(false);
                setSubmit(false)

                setTimeout(() => {
                    router.push("/"); // Redirect to success page
                }, 2000);

            } else {
                setSubmit(false)
                toast.error("Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("An error occurred while sending the email. Please try again later.");
        }


        // try {
        //     const url = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/getting_started`
        //     const resp = await fetch(url, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(values)
        //     })

        //     if (resp.status === 200) {
        //         setValues({ first_name: "", last_name: "", company_name: "", email: "", phone_number: "", address: "" })
        //         toast.success("Form submitted successfully!");
        //         setStarted(false)
        //         setSubmit(false)
        //     } else {
        //         toast.error("Failed to submit the form. Please try again.");
        //         setSubmit(false)
        //     }
        // } catch (error) {
        //     toast.error("Failed to submit the form. Please try again.");
        //     setSubmit(false)
        // }
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
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
        }, 15000);

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
            <ToastContainer position="top-right" autoClose={3000} />

            <main className={styles.main}>
                {/* <Hero styles={styles} handleVideoPlay={handleVideoPlay} setToggle={setToggle} /> */}
                <div className={`${styles.form} ${styles.enquire}`}>
                    <div className={styles.inner}>
                        <h2>Begin Your Journey with Anamo!</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="First Name" name="first_name" value={values.first_name} onChange={handleChange} required />
                            <input type="text" placeholder="Last Name" name="last_name" value={values.last_name} onChange={handleChange} required />
                            <input type="text" placeholder="Company Name" name="company_name" value={values.company_name} onChange={handleChange} required />
                            <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} required />
                            <input type="tel" placeholder="Phone Number" name="phone_number" value={values.phone_number} onChange={handleChange} required />
                            <input type="text" placeholder="City, State" name="address" value={values.address} onChange={handleChange} required />
                            <div className={styles.btns}>
                                <button type="submit">{submit ? <Oval visible={true} height="80"
                                    width="20"
                                    color="#fff"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                /> : "Submit"}
                                </button>
                                {/* <button type="button" onClick={() => {
                                    setStarted(false)
                                    setSubmit(false)
                                }}>Cancel</button> */}
                            </div>
                        </form>
                    </div>
                </div>

                {/* <Footer styles={styles} /> */}
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

        </div>
    )
}

export default Enquire