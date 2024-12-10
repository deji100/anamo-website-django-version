"use client"

import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import SlideX from "../animations/slideX";

const Faq = ({ question, answer, styles }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.faq}>
            <h3 className={styles.question} onClick={() => setToggle(prev => !prev)}>{question}<FaPlusSquare className={toggle ? `${styles.icon} ${styles.active}` : styles.icon} />
            </h3>
            <div className={toggle ? `${styles.answer} ${styles.active}` : styles.answer}>{answer}</div>
        </div>
    )
}

const FAQS = ({ styles }) => {
    return (
        <div className={styles.faqs} id="faq">
            <div className={styles.inner}>
                <div className={styles.title_desc}>
                    <SlideX direction={"right"}>
                        <h2>Frequently Asked Questions</h2>
                    </SlideX>
                    <SlideX>
                        <p>{"Have suggestions to improve our content or services? Contact us, and we’ll do our best to accommodate!"}</p>
                    </SlideX>
                </div>
                <div className={styles.faqs_list}>
                    <div className={styles.faq_list}>
                        <Faq question={"How Much Does Anamo Cost? / How do I get a Quote for Anamo?"} answer={"Contact Sales: Sales@Anamo.io / 949.629.3900"} styles={styles} />
                        <Faq question={"Why would my company want to consider using Anamo CDM?"} answer={"Offering twice the capability at half the price seems to make sense to many"} styles={styles} />
                    </div>
                    <div className={styles.faq_list}>
                        <Faq question={"Does Anamo offer any Free Access to its CDM Platform?"} answer={"“Yes” Anamo offers limited Free-Trials and NFR Licensing to qualified Distributors & Partners."} styles={styles} />
                        <Faq question={"Does Anamo offer any special purchasing discount?"} answer={"“Yes” Anamo does provide special discounts to Social, Military, Educational, Religious, Fraternal and Political organizations."} styles={styles} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQS