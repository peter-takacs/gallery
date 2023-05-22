import Image from "next/image";
import { Image as GalleryImage } from "@/components/Gallery.react";
import styles from "@/components/lightbox.module.css";
import LightboxContext from "@/components/LightboxContext.react";
import YARL from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useContext } from "react";

type Props = {
  image: GalleryImage;
};

export default function Lightbox({ image }: Props) {
  const { hide, images } = useContext(LightboxContext);

  useEffect(() => {
    window.addEventListener("popstate", hide);
    return () => window.removeEventListener("popstate", hide);
  }, [hide]);

  const index = images.findIndex(({ title }) => title === image.title);

  return (
    <div className={styles.lightbox}>
      <YARL
        open={true}
        close={hide}
        slides={images.map((image) => image.src)}
        index={index}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
}

import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from "yet-another-react-lightbox";

function NextJsImage({ slide, rect }: any) {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width)
      )
    : rect.width;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        placeholder="blur"
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}
