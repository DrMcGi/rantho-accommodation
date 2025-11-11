// src/app/_utils/confetti.ts
"use client";
import confetti from "canvas-confetti";

export function fireConfetti(particleCount = 90, spread = 70) {
  confetti({
    particleCount,
    spread,
    origin: { y: 0.6 },
  });
}
