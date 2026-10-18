"use client";

import { useEffect, useState } from "react";
import { LOCATIONS } from "@/lib/locations";

const CITIES = LOCATIONS.map((l) => l.name);

export function RotatingCityText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % CITIES.length);
        setVisible(true);
      }, 220);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-block min-w-[8ch] text-tayo-blue transition-all duration-200"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
      aria-live="polite"
    >
      {CITIES[index]}
    </span>
  );
}
