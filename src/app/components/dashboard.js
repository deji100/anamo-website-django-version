import Image from "next/image"
import Slide from "../animations/slide"

const Dashboard = ({ styles }) => {
    return (
        <Slide>
            <div className={styles.dashboard}>
                <div className={styles.inner}>
                    <p>Anamo stands out with its intuitive dashboard, rapid vulnerability resolution, multi-tenancy, and SIEM-like insights without log parsing. It offers robust search capabilities across OSs, applications, and package-level details, providing deep software insights.</p>
                    <div className={styles.img_container}>
                        <Image src={"/dashboard.webp"} alt="Dashboard" width={1000} height={1000} />
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default Dashboard