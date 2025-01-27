import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { videos } from "./data";
import Slide from "../animations/slide";

const Vid = ({ styles, vid, onClick }) => {

    return (
        <div className={styles.vid}>
            {/* <p></p> */}
            <div className={styles.image}>
                <Image src={vid.img} alt="Video" width={1000} height={1000} />
            </div>
            <div className={styles.icon_container} onClick={() => onClick(vid.link)}>
                <FaPlay className={styles.icon} />
            </div>
            <h5>{vid.title}</h5>
        </div>
    )
}

const IntroVid = ({ styles, handleVideoPlay }) => {
    return (
        <Slide>
            <div className={styles.intro_vids}>
                <div className={styles.inner}>
                    <div className={styles.videos}>
                        {
                            videos.map(v => (
                                <Vid key={v.id} styles={styles} vid={v} onClick={handleVideoPlay} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default IntroVid