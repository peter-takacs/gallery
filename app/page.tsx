import VizdevGallery from "@/app/vizdev/VizdevGallery.react";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <VizdevGallery />
    </main>
  );
}
