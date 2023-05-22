"use client";

import LightboxContext from "@/components/LightboxContext.react";
import { useEffect, useState, useMemo, useCallback, ReactNode } from "react";
import { Image } from "@/components/Gallery.react";

type Props = {
  children: ReactNode;
  images: Image[];
};

export default function LightboxContextProvider({ children, images }: Props) {
  const [content, setContent] = useState<ReactNode | null>(null);
  const show = useCallback((component: ReactNode) => setContent(component), []);
  const hide = useCallback(() => setContent(null), []);
  const value = useMemo(() => ({ show, hide, images }), [show, hide, images]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        hide();
      }
    };
    if (content == null) {
      return;
    }
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [content, hide]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {content != null ? content : null}
    </LightboxContext.Provider>
  );
}
