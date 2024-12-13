import Image from "next/image";
import { testimonials } from "./data";

const TestCard = ({ styles, card, position }) => {
    return (
        <div className={styles.card} style={{"--position_test" : `${position}`}}>
            <div className={styles.details}>
                <div className={styles.quote}>❝</div>
                <p>{card.text}</p>
                <h5>{card.author}</h5>
            </div>
            <div className={styles.img}>
                <Image src={card?.img} alt="Customer Profile Pic" width={1000} height={1000} />
            </div>
        </div>
    );
};

const TestimonialSlider = ({ styles }) => {
    return (
        <div className={styles.slider} style={{"--width_test" : "545px", "--height_test": "auto", "--quantity_test": "9"}}>
            <h2>Testimonials</h2>
            <div className={styles.testimonials}>
                {testimonials.map((card) => (
                    <TestCard key={card.id} position={card.id} styles={styles} card={card} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
