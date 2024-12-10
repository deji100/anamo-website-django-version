import styles from "./page.module.css";
import Hero from "./components/hero";
import Partners from "./components/partners";
import Suite from "./components/suite";
import Unique from "./components/unique";
import AnamoCDM from "./components/anamocdm";
import Dashboard from "./components/dashboard";
import CDM from "./components/cdm";
import Testimonials from "./components/testimonials";
import FAQS from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero styles={styles} />
        <Partners styles={styles} />
        <Suite styles={styles} />
        <Unique styles={styles} />
        <AnamoCDM styles={styles} />
        <Dashboard styles={styles} />
        <CDM styles={styles} />
        <Testimonials styles={styles} />
        <FAQS styles={styles} />
        <Footer styles={styles} />
      </main>
    </div>
  );
}
