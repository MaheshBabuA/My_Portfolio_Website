import React, { useRef, useState, useEffect } from "react";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  const sectionRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize positions in a spread-out circle
  useEffect(() => {
    const count = technologies.length;
    const initPositions = technologies.map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 260;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        baseX: Math.cos(angle) * radius,
        baseY: Math.sin(angle) * radius,
      };
    });
    setPositions(initPositions);
  }, []);

  // Track scroll within the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const totalScrollable = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate positions based on scroll
  useEffect(() => {
    const count = technologies.length;
    const targetRadius = 110;

    setPositions((prev) =>
      prev.map((pos, i) => {
        const angle = (i / count) * Math.PI * 2;
        const targetX = Math.cos(angle) * targetRadius;
        const targetY = Math.sin(angle) * targetRadius;
        const x = pos.baseX + (targetX - pos.baseX) * scrollProgress;
        const y = pos.baseY + (targetY - pos.baseY) * scrollProgress;
        return { ...pos, x, y };
      })
    );
  }, [scrollProgress]);

  // Calculate line opacity based on proximity
  const getLineOpacity = (i, j) => {
    if (!positions[i] || !positions[j]) return 0;
    const dx = positions[i].x - positions[j].x;
    const dy = positions[i].y - positions[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 320;
    const opacity = Math.max(0, 1 - dist / maxDist);
    return opacity * (0.15 + scrollProgress * 0.6);
  };

  // SVG center is at 50%, 50% of the container
  const svgCenterX = 450; // Half of ~900px container
  const svgCenterY = 325; // Half of 650px container

  return (
    <section
      ref={sectionRef}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      style={{ minHeight: "130vh" }}
    >
      <span className='hash-span'>&nbsp;</span>

      <div className='relative flex justify-center items-center' style={{ minHeight: "650px" }}>
        {/* SVG layer for connecting lines */}
        <svg
          className='absolute inset-0 w-full h-full pointer-events-none'
          style={{ zIndex: 0 }}
          viewBox='0 0 900 650'
          preserveAspectRatio='xMidYMid meet'
        >
          {positions.map((pos, i) =>
            positions.slice(i + 1).map((pos2, j) => {
              const opacity = getLineOpacity(i, i + j + 1);
              if (opacity <= 0) return null;
              return (
                <line
                  key={`${i}-${i + j + 1}`}
                  x1={svgCenterX + pos.x}
                  y1={svgCenterY + pos.y}
                  x2={svgCenterX + pos2.x}
                  y2={svgCenterY + pos2.y}
                  stroke='#915EFF'
                  strokeWidth={1 + scrollProgress * 1.5}
                  opacity={opacity}
                />
              );
            })
          )}
        </svg>

        {/* Tech balls */}
        {technologies.map((technology, i) => (
          <div
            key={technology.name}
            className='absolute w-20 h-20 md:w-28 md:h-28'
            style={{
              transform: `translate(${positions[i]?.x || 0}px, ${positions[i]?.y || 0}px)`,
              transition: "transform 0.3s ease-out",
              zIndex: 10,
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
