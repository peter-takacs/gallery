"use client";

import LightboxContext from "@/components/LightboxContext.react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { Image } from "@/components/Gallery.react";

type Props = {
  children: React.Node;
  images: Image[];
};

export default function LightboxContextProvider({ children, images }: Props) {
  const [content, setContent] = useState(null);
  const show = useCallback((component) => setContent(component), []);
  const hide = useCallback(() => setContent(null), []);
  const value = useMemo(() => ({ show, hide, images }), [show, hide, images]);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        hide();
      }
    };
    if (content == null) {
      return;
    }
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [content]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {content != null ? content : null}
    </LightboxContext.Provider>
  );
}
