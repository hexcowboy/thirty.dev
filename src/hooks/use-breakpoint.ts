import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@/../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const defaultScreens = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

type Direction = "min" | "max";

const screens = { ...defaultScreens, ...fullConfig.theme?.screens };

// This hook returns true if the screen size is greater than the given size when 'min' is true,
// or if the screen size is less than the given size when 'max' is true.
export const useBreakpoint = (size: Size, direction: Direction = "min") => {
  const [isScreen, setIsScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(${direction}-width: ${screens[size]})`
    );
    const listener = () => setIsScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", listener);
    listener();

    return () => mediaQuery.removeEventListener("change", listener);
  }, [size, direction]);

  return isScreen;
};
