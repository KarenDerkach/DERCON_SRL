"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimation({
  children,
  duration = 0.5,
  delay = 0,
  animation = "fadeInUp",
  className = "",
  threshold = 0.1,
  once = true,
}) {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: once,
  });

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
