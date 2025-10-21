"use client";

import { useEffect } from "react";
import NProgress from "nprogress";

export function useNProgressNavigation() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a[href]");
      if (link && link.getAttribute("href")?.startsWith("/")) {
        NProgress.start();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
