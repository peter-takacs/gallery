"use client";

import LightboxContext from "@/components/LightboxContext.react";
import { useState, useMemo, useCallback } from "react";

type Props = {
  children: React.Node;
};

export default function LightboxContextProvider({ children }: Props) {
  const [content, setContent] = useState(null);
  const show = useCallback((component) => setContent(component), []);
  const hide = useCallback(() => setContent(null), []);
  const value = useMemo(() => ({ show, hide }), [show, hide]);
  return (
    <LightboxContext.Provider value={value}>
      {children}
      {content != null ? content : null}
    </LightboxContext.Provider>
  );
}
