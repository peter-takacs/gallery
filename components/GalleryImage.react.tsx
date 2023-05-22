"use client";

import { StaticImageData } from "next/image";
import styles from "@/components/gallery.module.css";
import Image from "next/image";
import LightboxContext from "@/components/LightboxContext.react";
import Lightbox from "@/components/Lightbox.react";
import { useContext, useEffect } from "react";

type Props = {
  src: StaticImageData;
  title?: string;
};

export default function GalleryImage({ src, title }: Props) {
  const { show, hide } = useContext(LightboxContext);
  return (
    <div
      className={styles.image}
      onClick={() => {
        history.pushState(title, "");
        show(<Lightbox image={{ src, title }} />);
      }}
    >
      <Image
        alt={title ?? "Image"}
        key={title}
        placeholder="blur"
        src={src}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
