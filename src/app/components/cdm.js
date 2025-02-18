"use client"

import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Slide from "../animations/slide";

const CDM = ({ styles }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <Slide>
            <div className={styles.cdm}>
                <div className={styles.inner}>
                    <div className={styles.unparalled}>
                        <div className={styles.title}>
                            <h2>Anamo CDM - Unparalleled</h2>
                            <hr />
                        </div>
                        <p>Anamo addresses the needs of businesses and the US Government with active dashboards that prioritize resource allocation and remediation. Its CDM platform offers 24/7/365 real-time and on-demand cybersecurity, integrating top industry capabilities. Over 100 entities, including federal agencies, utilize CDM as a core defense solution.</p>
                        <div className={toggle ? `${styles.hidden_content} ${styles.active}` : styles.hidden_content}>
                            <ul>
                                <li>SIEM – Security Incident Event Management</li>
                                <li>EDR – Endpoint Detection & Response</li>
                                <li>ASM - Attack Surface Management</li>
                                <li>Vul-Scan - CVE Vulnerability Scanning</li>
                                <li>EPP - Endpoint Protection</li>
                                <li>BA - Behavior Awareness</li>
                            </ul>
                            <p><Link href={"/2020 09 03_CDM Program Overview_Fact Sheet_1.pdf"} target="_blank" style={{ color: "#CC0001" }} download>Download</Link> the U.S. Federal Agency Report to discover which federal agencies have integrated CDM as a core part of their cybersecurity defense strategy and learn about the 100+ organizations leveraging this advanced capability.</p>
                            <p><Link href={"https://www.cisa.gov/resources-tools/programs/continuous-diagnostics-and-mitigation-cdm-program"} target="_blank" style={{ color: "#CC0001" }} download>Click here</Link> to get answers to your CDM program questions directly from CISA and the DHS</p>
                        </div>
                        <button type="button" onClick={() => setToggle(!toggle)}>
                            {toggle ? "Read Less" : "Read More"}
                            <MdKeyboardArrowDown className={styles.icon} />
                        </button>
                    </div>
                    <div className={styles.what_is_cdm}>
                        <div className={styles.title}>
                            <h2>What is CDM?</h2>
                            <hr />
                        </div>
                        <p>{"Anamo's CDM Platform combines ML with Continuous Diagnostics and Risk Analysis and together they deliver critical functions across a broad range of Cybersecurity Risk Artifacts where the presence of exploitable and vulnerability software meets up against Bad Actors and Technical Adversaries who might attempt to compromise any number of computes systems. In this way, Anamo CDM is delivering the best attributes of (Log-Less) SIEM, ASM, EPP, EDR, eDiscovery & Forensics to the C-Suite and InfoSec Teams."}</p>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default CDM