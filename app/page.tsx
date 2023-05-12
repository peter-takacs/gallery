import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "./Gallery.react";
import establishingShot from "../public/Kalman_Michelle_Final_EstablishingShot.jpg";

export default function Home() {
  const images = [{ src: establishingShot }];
  return (
    <main className={styles.main}>
      <Gallery title="vizdev" images={images} />
    </main>
  );
}
