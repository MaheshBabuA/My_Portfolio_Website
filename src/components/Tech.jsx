import React, { useRef, useState, useEffect, useCallback } from "react";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  const sectionRef = useRef(null);
  const ballRefs = useRef([]);
  const [offsets, setOffsets] = useState(
    technologies.map(() => ({ x: 0, y: 0 }))
  );
  const [assembled, setAssembled] = useState(false);
  const targetOffsetsRef = useRef(technologies.map(() => ({ x: 0, y: 0 })));
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, velocity: 0 });
  const rafRef = useRef(null);
  const assembledRef = useRef(false);

  const isCorner = useCallback((mx, my, rect) => {
    const relX = mx - rect.left;
    const relY = my - rect.top;
    const cornerSize = 120;
    const inLeft = relX < cornerSize;
    const inRight = relX > rect.width - cornerSize;
    const inTop = relY < cornerSize;
    const inBottom = relY > rect.height - cornerSize;
    return (inLeft || inRight) && (inTop || inBottom);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const m = mouseRef.current;
      const dx = e.clientX - m.prevX;
      const dy = e.clientY - m.prevY;
      m.velocity = Math.sqrt(dx * dx + dy * dy);
      m.prevX = m.x;
      m.prevY = m.y;
      m.x = e.clientX;
      m.y = e.clientY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const nowInCorner = isCorner(e.clientX, e.clientY, rect);

        if (nowInCorner && !assembledRef.current) {
          const containerCX = rect.left + rect.width / 2;
          const containerCY = rect.top + rect.height / 2;
          const newTargets = ballRefs.current.map((el) => {
            if (!el) return { x: 0, y: 0 };
            const ballRect = el.getBoundingClientRect();
            const ballCX = ballRect.left + ballRect.width / 2;
            const ballCY = ballRect.top + ballRect.height / 2;
            return {
              x: (containerCX - ballCX) * 0.85,
              y: (containerCY - ballCY) * 0.85,
            };
          });
          targetOffsetsRef.current = newTargets;
        }

        assembledRef.current = nowInCorner;
        setAssembled(nowInCorner);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isCorner]);

  useEffect(() => {
    const tick = () => {
      if (assembledRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const m = mouseRef.current;
      const speed = Math.min(m.velocity, 30);
      m.velocity *= 0.9;

      setOffsets((prev) =>
        prev.map((off, i) => {
          const angle = (i / prev.length) * Math.PI * 2 + Date.now() * 0.003;
          const shakeX =
            Math.sin(angle * 3 + i) * speed * 0.6 * (0.5 + Math.random() * 0.5);
          const shakeY =
            Math.cos(angle * 2.7 + i) * speed * 0.4 * (0.5 + Math.random() * 0.5);
          return {
            x: off.x * 0.85 + shakeX * 0.15,
            y: off.y * 0.85 + shakeY * 0.15,
          };
        })
      );

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span'>&nbsp;</span>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, i) => (
          <div
            key={technology.name}
            className='w-28 h-28'
            ref={(el) => (ballRefs.current[i] = el)}
            style={{
              transform: assembled
                ? `translate(${targetOffsetsRef.current[i].x}px, ${targetOffsetsRef.current[i].y}px)`
                : `translate(${offsets[i].x}px, ${offsets[i].y}px)`,
              transition: assembled
                ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                : "none",
            }}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
