import Image from "next/image";
import FooterImg1 from "/public/footer-logo2.png"
import FooterImg2 from "/public/footer-logo.png"
import Link from "next/link";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn, MdArrowOutward } from "react-icons/md";

const Footer = ({ styles }) => {
    return (
        <footer>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.logo_desc}>
                        <Image src={FooterImg1} alt="Anamo" />
                        <p>Protect your systems from potential cyber attacks by proactively identifying and addressing software and hardware vulnerabilities with our comprehensive vulnerability management solutions.</p>
                        <Image src={FooterImg2} alt="UsProTech" />
                    </div>
                    <div className={styles.footer_col}>
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="https://www.anamo.io/feeds">
                                    Resource Hub <MdArrowOutward />
                                </a>
                            </li>
                            <li>
                                <Link href="/2025 Anamo Subscription Software Licenses and End User License Agreement EULA Ver 01_01.pdf" target="_blank" download>
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="mailto:info@anamo.io"><MdOutlineEmail /> info@anamo.io</a>
                            </li>
                            <li>
                                <a href="tel:+19496293900"><MdOutlinePhone /> (949) 629-3900</a>
                            </li>
                            <li>
                                <span><MdOutlineLocationOn /> Las Vegas, Nevada - USA</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Anamo, All Rights Reserved.</p>
                    <Link href="https://www.anamo.io/feeds">Resource Hub</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
