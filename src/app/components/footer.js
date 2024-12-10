import Image from "next/image";
import FooterImg1 from "/public/footer-logo2.png"
import FooterImg2 from "/public/footer-logo.png"

const Footer = ({ styles }) => {
    return (
        <footer>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.logo_desc}>
                        <Image src={FooterImg1} alt="Anamo" />
                        <p>Protect your systems from potential cyber attacks by proactively identifying and addressing software and hardware vulnerabilities with our comprehensive vulnerability management solutions.

                        </p>
                        <Image src={FooterImg2} alt="UsProTech" />
                    </div>
                    <div className={styles.contact}>
                        <h4>Contact</h4>
                        <div className={styles.details}>
                            <p>info@anamo.io</p>
                            <p>(949) 629-3900</p>
                            <p>Las Vegas, Nevada - USA</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© 2024 Anamo, All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;