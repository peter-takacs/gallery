import cat from "@/../public/cat.jpg";
import Image from "next/image";
import styles from "@/app/about/about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div>
        <Image
          alt="The most beautiful cat in the world"
          src={cat}
          fill={true}
        />
      </div>
      <div>
        <h2>Hi!</h2>
        <p>
          My name is Michelle, but you&apos;re probably here to look at my art
          or my cat. I&apos;m an artist studying visual development and
          illustration, and I enjoy star wars and legos - and star wars legos!
        </p>
      </div>
    </div>
  );
}
