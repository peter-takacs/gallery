import cat from "@/../public/cats.jpg";
import styles from "@/app/about/about.module.css";
import ExportedImage from "next-image-export-optimizer";

export default function About() {
  return (
    <div className={styles.about}>
      <div>
        <ExportedImage
          alt="The most beautiful cat in the world"
          src={cat}
          fill={true}
        />
      </div>
      <div>
        <h2>Hello, my name is Michelle Kalman!</h2>

        <p>
          I&apos;m a visual development artist/illustrator based in San Jose,
          CA. I use a variety of mediums – including painting, drawing, and
          digital art – to create images capturing the imagination. Visual
          storytelling is a powerful way to communicate, and I enjoy adding a
          story to everything I design.
        </p>

        <p>
          When I&apos;m not creating art, you can find me trying to embroider
          with two very playful cats – Yzma and Sylvanas – helping me as well as
          reading, gaming, and travelling.
        </p>

        <p>
          For resume requests or just to chat, please contact me at{" "}
          <a className={styles.email} href="mailto:michelledeekalman@gmail.com">
            michelledeekalman@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
