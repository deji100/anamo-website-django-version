"use client"
import SlideX from "../animations/slideX"
import Slide from "../animations/slide"
import { unique_cards_data } from "./data"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const UniqueCard = ({ styles, unique }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={toggle ? `${styles.card} ${styles.active}` : styles.card}>
            <div className={styles.titl_desc}>
                <div>
                    <h3>{unique.title}</h3>
                    <hr />
                </div>
                <p>{unique.desc}</p>
            </div>
            <div className={toggle ? `${styles.feature} ${styles.active}` : styles.feature}>
                <h3>Features Include:</h3>
                <ul>
                    {unique.features.map(feat => (
                        <li key={feat.desc}>
                            <span>{feat.title}</span> {feat.desc}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={() => setToggle(i => !i)}>
                Read More
                <MdKeyboardArrowDown className={styles.icon} />
            </button>
        </div>
    )
}

const Unique = ({ styles }) => {
    return (
        <div className={styles.unique}>
            <Slide>
                <div className={styles.inner}>
                    <div className={styles.title_desc}>
                        <SlideX direction={"right"}>
                            <h2>What makes Anamo Unique?</h2>
                        </SlideX>
                        <SlideX>
                            <p>Anamo excels with real-time adversary detection, Zero-Day Exploit identification, and advanced autonomous risk assessment.</p>
                        </SlideX>
                    </div>
                    <div className={styles.unique_cards}>
                        {
                            unique_cards_data.map((unique) => (
                                <UniqueCard key={unique.title} styles={styles} unique={unique} />
                            ))
                        }
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Unique