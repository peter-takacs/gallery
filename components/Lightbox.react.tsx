import Image from "next/image";
import styles from "@/components/lightbox.module.css";
import LightboxContext from "@/components/LightboxContext.react";

type Props = {
  src: string;
};

export default function Lightbox({ src }: Props) {
  return (
    <div className={styles.lightbox}>
      <Image
        key={src}
        placeholder="blur"
        src={src}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
