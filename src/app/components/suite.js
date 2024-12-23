"use client"

import React, { useEffect, useRef, useState } from "react";
import {useInView } from "framer-motion";
import Image from "next/image";
import { suite_data } from "./data";
import Slide from "../animations/slide";

const SuiteCard = ({ styles, active, suite }) => {
    return (
        <div className={active ? `${styles.suite_card} ${styles.active}` : styles.suite_card} data-suite-id={suite.id} data-suite-active={active}>
            <div className={styles.img_title}>
                <Image src={suite.img} alt="icon" width={40} height={40} />
                <div className={styles.title}>
                    <h3>{suite.title}</h3>
                    <hr />
                </div>
            </div>
            <p>{suite.des}</p>
        </div>
    )
}

const Suite = ({ styles }) => {
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            console.log(true)
            setActive(true)
        }else {
            console.log(false)
            setActive(false)
        }
    }, [active, isInView])

    return (
        <div className={styles.suite} ref={ref}>
            <Slide>
                <div className={styles.inner}>
                    <h2>Comprehensive Cybersecurity Solution suite</h2>

                    <div className={styles.suite_img}>
                        {
                            suite_data.map(suite => (
                                <SuiteCard key={suite.title} styles={styles} active={active} suite={suite} />
                            ))
                        }
                        <div className={styles.img_container}>
                            <Image src={"/suite.webp"} alt="Suite Image" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Suite