import React, {useState, useEffect, useRef} from "react";
import "./StackedReveal.scss";

export default function StackedReveal({children, isFirst}) {
  const [expanded, setExpanded] = useState(isFirst);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isFirst || expanded) return;
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExpanded(true);
          observer.disconnect();
        }
      },
      {threshold: 0, rootMargin: "0px 0px -30px 0px"}
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isFirst, expanded]);

  return (
    <div
      ref={wrapperRef}
      className={`stacked-reveal ${expanded ? "stacked-reveal--expanded" : "stacked-reveal--collapsed"}`}
      onClick={() => {
        if (!expanded) setExpanded(true);
      }}
    >
      {children}
      {!expanded && (
        <div className="stacked-reveal__hint">Click to expand</div>
      )}
    </div>
  );
}
