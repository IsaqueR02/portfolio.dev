import type { Variants } from "motion/react"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  // Reduced states remove both spatial movement and animation delay.
  reduced: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  reduced: {
    opacity: 1,
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  reduced: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  reduced: { opacity: 1, transition: { duration: 0 } },
}

export const dialogOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  reduced: { opacity: 1, transition: { duration: 0 } },
}

export const sheetSlide: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  reduced: {
    opacity: 1,
    x: 0,
    transition: { duration: 0 },
  },
}