import Image from "next/image"
import Link from "next/link"
import { HiArrowLongRight } from "react-icons/hi2";
import SlideX from "../animations/slideX";

const AnamoCDM = ({ styles }) => {
    return (
        <SlideX>
            <div className={styles.anamo_cdm}>
                <div className={styles.inner}>
                    <Image src={"/anamo-cdm.webp"} alt="Anamo CDM" width={1000} height={1000} />
                    <div className={styles.content}>
                        <div className={styles.content_inner}>
                            <h2>Anamo is a CDM cybersecurity platform providing Continuous Diagnostics and Mitigation.</h2>
                            <p>{"Anamo's patent-pending CDM platform delivers real-time, continuous risk assessment and management of users, ports, permissions, and CVE vulnerabilities across Linux, Windows, and more. It aligns with all key components of the DHS CDM cybersecurity program."}</p>
                            <Link href={"/"} target="_blank">
                                Get Started
                                <HiArrowLongRight className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SlideX>
    )
}

export default AnamoCDM