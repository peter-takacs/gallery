"use client";

import styles from "@/components/gallery.module.css";
import Image from "next/image";
import LightboxContext from "@/components/LightboxContext.react";
import Lightbox from "@/components/Lightbox.react";
import { useContext } from "react";

type Props = {
  src: string;
};

export default function GalleryImage({ src }: Props) {
  const { show } = useContext(LightboxContext);
  return (
    <div className={styles.image} onClick={() => show(<Lightbox src={src} />)}>
      <Image
        key={src}
        placeholder="blur"
        src={src}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
