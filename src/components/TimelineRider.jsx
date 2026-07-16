import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

const TimelineRider = ({ containerRef }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) return null;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ top }}
      className='absolute left-[18px] lg:left-1/2 -translate-x-1/2 z-50 pointer-events-none'
    >
      <motion.div
        animate={{ rotate: [-4, 4, -4] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon
          icon='mdi:motorbike'
          width='32'
          height='32'
          color='#915EFF'
          style={{ transform: "rotate(90deg)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TimelineRider;
