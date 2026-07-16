import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const RotateHint = ({ visible }) => {
  const [show, setShow] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (visible) setShow(true);
    }, 1500);

    const autoHide = setTimeout(() => {
      setShow(false);
    }, 8000);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(autoHide);
    };
  }, []);

  useEffect(() => {
    if (!visible) setShow(false);
  }, [visible]);

  const oscillate = prefersReducedMotion
    ? {}
    : { x: [-8, 8, -8] };

  return (
    <AnimatePresence>
      {show && visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: oscillate,
          }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
          transition={
            prefersReducedMotion
              ? { duration: 0.5 }
              : { duration: 0.5, x: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }
          }
          className='absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 rounded-full border border-secondary/50 bg-primary/80 backdrop-blur-sm px-4 py-2'
        >
          <Icon icon='mdi:cursor-move' width='20' height='20' color='#915EFF' />
          <span className='text-secondary text-[13px] font-medium whitespace-nowrap'>
            Drag to rotate
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RotateHint;
