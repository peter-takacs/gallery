import { StaticImageData } from "next/image";
import styles from "@/components/gallery.module.css";
import GalleryImage from "@/components/GalleryImage.react";

export type Image = {
  src: StaticImageData;
  title?: string;
};

type Props = {
  title: string;
  images: Image[];
};

export default function Gallery({ title, images }: Props) {
  return (
    <div className={styles.gallery}>
      <h2>{title}</h2>
      <div className={styles.imageGrid}>
        {images.map(({ src, title }) => (
          <GalleryImage src={src} key={title} title={title} />
        ))}
      </div>
    </div>
  );
}
