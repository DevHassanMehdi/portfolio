import React, {useCallback, useContext, useRef, useState} from "react";
import "./Achievement.scss";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function openUrl(url) {
  if (!url) return;
  window.open(url, "_blank").focus();
}

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const cards = achievementSection.achievementsCards;
  const total = cards.length;

  const [activeIdx, setActiveIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  const prefersReduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const goTo = useCallback(
    idx => setActiveIdx(((idx % total) + total) % total),
    [total]
  );

  const advance = useCallback(() => {
    if (exiting) return;
    if (prefersReduced.current) {
      goTo(activeIdx + 1);
      return;
    }
    setExiting(true);
    setTimeout(() => {
      setExiting(false);
      goTo(activeIdx + 1);
    }, 300);
  }, [activeIdx, exiting, goTo]);

  const retreat = useCallback(() => {
    if (exiting) return;
    goTo(activeIdx - 1);
  }, [activeIdx, exiting, goTo]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        advance();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        retreat();
      }
    },
    [advance, retreat]
  );

  const touchStartX = useRef(null);
  const onTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = e => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) advance();
    else retreat();
  };

  if (!achievementSection.display) return null;

  // order[pos] = cardIdx — pos 0 is the top (active) card
  const order = Array.from({length: total}, (_, i) => (activeIdx + i) % total);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className="main"
        id="achievements"
        tabIndex={0}
        aria-label="Achievement cards. Use left and right arrow keys to navigate."
        onKeyDown={handleKeyDown}
      >
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="ach-layout">
            {/* ── Deck (60 %) ── */}
            <div
              className="ach-deck-wrapper"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="ach-deck" aria-live="polite">
                {order.map((cardIdx, pos) => {
                  const card = cards[cardIdx];
                  const isTop = pos === 0;
                  const isVisible = pos < 3;

                  return (
                    <div
                      key={cardIdx}
                      className={
                        "ach-deck-slot" +
                        (isTop && exiting ? " ach-deck-slot--exiting" : "")
                      }
                      style={{
                        zIndex: Math.max(0, 5 - pos),
                        transform: isVisible
                          ? `translate(${pos * 12}px, ${pos * 12}px) scale(${(1 - pos * 0.03).toFixed(2)})`
                          : "none",
                        opacity: isVisible ? +(1 - pos * 0.15).toFixed(2) : 0,
                        pointerEvents: isTop ? "auto" : "none",
                        cursor: isTop && !exiting ? "pointer" : "default",
                      }}
                      onClick={isTop && !exiting ? advance : undefined}
                      title={isTop ? "Click to see next card" : undefined}
                      aria-hidden={!isTop}
                    >
                      <div className={isDark ? "dark-mode ach-card" : "ach-card"}>
                        <div className="ach-image-div">
                          <img
                            src={card.image}
                            alt={card.imageAlt || "Achievement"}
                            className="ach-roundedimg"
                          />
                        </div>
                        <div className="ach-content">
                          <h5 className="ach-title">{card.title}</h5>
                          {card.subtitle && (
                            <p className="ach-subtitle">{card.subtitle}</p>
                          )}
                          {card.desc && (
                            <p className="ach-desc">{card.desc}</p>
                          )}
                        </div>
                        {card.footerLink && card.footerLink.length > 0 && (
                          <div className="ach-footer">
                            {card.footerLink.map((v, j) => (
                              <button
                                key={j}
                                className="ach-tag"
                                aria-label={`Open ${v.name}`}
                                onClick={e => {
                                  e.stopPropagation();
                                  openUrl(v.url);
                                }}
                              >
                                {v.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Prev / counter / next */}
              <div className="ach-controls">
                <button
                  className="ach-ctrl-btn"
                  aria-label="Previous card"
                  onClick={retreat}
                >
                  &#8249;
                </button>
                <span
                  className="ach-counter"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {activeIdx + 1} / {total}
                </span>
                <button
                  className="ach-ctrl-btn"
                  aria-label="Next card"
                  onClick={advance}
                >
                  &#8250;
                </button>
              </div>
            </div>

            {/* ── Index (40 %) ── */}
            <nav className="ach-index" aria-label="Achievement list">
              {cards.map((card, i) => (
                <button
                  key={i}
                  className={
                    "ach-index-btn" +
                    (i === activeIdx ? " ach-index-btn--active" : "")
                  }
                  aria-label={`Show: ${card.title}`}
                  aria-current={i === activeIdx ? "true" : undefined}
                  onClick={() => goTo(i)}
                >
                  <span className="ach-index-dot" aria-hidden="true" />
                  <span className="ach-index-text">{card.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Fade>
  );
}
