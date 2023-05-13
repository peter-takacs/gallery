import Image from "next/image";
import styles from "./gallery.module.css";

export type Image = {
  src: string;
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
        {images.map(({ src }) => (
          <div className={styles.image}>
            <Image
              key={src}
              placeholder="blur"
              src={src}
              style={{ "object-fit": "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}