import Image from "next/image";

const Partners = ({ styles }) => {
  return (
    <div className={styles.partners}>
      <div className={styles.inner} style={{ "--width": "100px", "--height": "50px", "--quantity": "9" }}>
        <h2>Our Partners</h2>
        <div className={styles.ptns}>
          <div className={styles.item} style={{"--position": "1"}}><Image src={"/us-protech.webp"} alt="Partner Logo" width={138} height={43} /></div>
          <div className={styles.item} style={{"--position": "2"}}><Image src={"/solaris.webp"} alt="Partner Logo" width={60} height={41} /></div>
          <div className={styles.item} style={{"--position": "3"}}><Image src={"/windows.webp"} alt="Partner Logo" width={50} height={47} /></div>
          <div className={styles.item} style={{"--position": "4"}}><Image src={"/google-cloud.webp"} alt="Partner Logo" width={188} height={36} /></div>
          <div className={styles.item} style={{"--position": "5"}}><Image src={"/aix.webp"} alt="Partner Logo" width={50} height={50} /></div>
          <div className={styles.item} style={{"--position": "6"}}><Image src={"/azure.webp"} alt="Partner Logo" width={120} height={36} /></div>
          <div className={styles.item} style={{"--position": "7"}}><Image src={"/aws.webp"} alt="Partner Logo" width={59} height={42} /></div>
          <div className={styles.item} style={{"--position": "8"}}><Image src={"/unix.webp"} alt="Partner Logo" width={82} height={22} /></div>
          <div className={styles.item} style={{"--position": "9"}}><Image src={"/dolph.webp"} alt="Partner Logo" width={50} height={57} /></div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
