import { ReactNode, createContext } from "react";
import { Image } from "@/components/Gallery.react";

type LightboxContext = {
  show: (_: ReactNode) => void;
  hide: () => void;
  images: Image[];
};

export default createContext({
  show: (_: ReactNode) => {},
  hide: () => {},
  images: [],
} as LightboxContext);
