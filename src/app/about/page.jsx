import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About Description",
};


const AboutPage = () => {
  console.log("where is this page working")
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.textContainer}`}>
        <h1 className={styles.textColor}>About Agency</h1>
        <h1 className={`${styles.title}`}>
          Lorem, ipsum dolor Lorem, ipsum dolor.
        </h1>
        <p className={`${styles.desc}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem
          reiciendis consequuntur ullam voluptate quibusdam tempora similique
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          adipisci in nulla voluptates! Maiores magni facilis nihil animi fugit.
          Nulla sapiente sunt praesentium dolores quibusdam! Excepturi nesciunt
          corporis neque similique.
        </p>
        <div className={styles.experince}>
          <div className={styles.yearExp}>
            <h1 className={styles.textColor}>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.peopleExp}>
            <h1 className={styles.textColor}>234 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.serviceExp}>
            <h1 className={styles.textColor}>5 K+</h1>
            <p>Service and plugins</p>
          </div>
        </div>
      </div>
      <div className={`${styles.imageContainer}`}>
        <Image src="/about.png" alt="" fill className={styles.aboutImage} />
      </div>
    </div>
  );
};

export default AboutPage;
