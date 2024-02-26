import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.textContainer}`}>
        <h1 className={`${styles.title}`}>
          Lorem, ipsum dolor Lorem, ipsum dolor.
        </h1>
        <p className={`${styles.desc}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem
          reiciendis consequuntur ullam voluptate quibusdam tempora similique
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill />
        </div>
      </div>
      <div className={`${styles.imageContainer}`}>
        <Image src="/hero.gif" alt="" fill/>
      </div>
    </div>
  );
}
