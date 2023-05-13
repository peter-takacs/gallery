import VizdevGallery from "@/app/vizdev/VizdevGallery.react";
import LightboxContextProvider from "@/components/LightboxContextProvider.react";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <LightboxContextProvider>
      <main className={styles.main}>
        <VizdevGallery />
      </main>
    </LightboxContextProvider>
  );
}
