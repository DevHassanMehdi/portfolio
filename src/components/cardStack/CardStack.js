import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import "./CardStack.scss";

export default function CardStack({cards}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [containerHeight, setContainerHeight] = useState(400);
  const lastAdvanceRef = useRef(0);
  const total = cards.length;

  // Measure active card and set container height
  useLayoutEffect(() => {
    const card = cardRefs.current[activeIndex];
    if (card) {
      setContainerHeight(card.offsetHeight + 20);
    }
  }, [activeIndex]);

  // Fallback measurement after paint
  useEffect(() => {
    const timer = setTimeout(() => {
      const card = cardRefs.current[activeIndex];
      if (card) setContainerHeight(card.offsetHeight + 20);
    }, 60);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Scroll-based advancement: advance when user has scrolled >50% past the active card
  useEffect(() => {
    if (activeIndex >= total - 1) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const now = Date.now();
      if (now - lastAdvanceRef.current < 700) return;

      const rect = container.getBoundingClientRect();
      const amountAbove = Math.max(0, -rect.top);
      if (amountAbove > rect.height * 0.5) {
        lastAdvanceRef.current = now;
        setActiveIndex(prev => Math.min(prev + 1, total - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, total]);

  const handlePeekClick = () => {
    if (activeIndex < total - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="card-stack-container"
      style={{height: containerHeight}}
    >
      {cards.map((card, i) => {
        const state =
          i < activeIndex
            ? "past"
            : i === activeIndex
            ? "active"
            : i === activeIndex + 1
            ? "peek"
            : "hidden";

        return (
          <div
            key={i}
            ref={el => (cardRefs.current[i] = el)}
            className={`card-stack-item card-stack-${state}`}
            onClick={state === "peek" ? handlePeekClick : undefined}
            aria-hidden={state === "hidden" || state === "past"}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
}
