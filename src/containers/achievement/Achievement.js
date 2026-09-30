import React, {useCallback, useContext, useRef, useState} from "react";
import "./Achievement.scss";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const DECK_FADE_MS = 600;

function openUrl(url) {
  if (!url) return;
  window.open(url, "_blank").focus();
}

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const cards = achievementSection.achievementsCards;
  const total = cards.length;

  const [activeIdx, setActiveIdx] = useState(0);
  const [anim, setAnim] = useState(null); // { dir: "next"|"prev"|"jump", newActive: number } | null

  const animTimer = useRef(null);
  const prefersReduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const runAnim = useCallback(
    (dir, targetArg) => {
      if (anim) return;
      const newActive =
        targetArg !== undefined
          ? targetArg
          : dir === "next"
          ? (activeIdx + 1) % total
          : (activeIdx - 1 + total) % total;
      if (newActive === activeIdx) return;
      if (prefersReduced.current) {
        setActiveIdx(newActive);
        return;
      }
      setAnim({dir, newActive});
      animTimer.current = setTimeout(() => {
        animTimer.current = null;
        setAnim(null);
        setActiveIdx(newActive);
      }, DECK_FADE_MS);
    },
    [anim, activeIdx, total]
  );

  const advance = useCallback(() => runAnim("next"), [runAnim]);
  const retreat = useCallback(() => runAnim("prev"), [runAnim]);

  const goTo = useCallback(
    i => {
      if (i === activeIdx || anim) return;
      runAnim("jump", i);
    },
    [activeIdx, anim, runAnim]
  );

  const handleKeyDown = useCallback(
    e => {
      if (e.key === "ArrowRight") { e.preventDefault(); advance(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); retreat(); }
    },
    [advance, retreat]
  );

  const touchStartX = useRef(null);
  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = e => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) advance(); else retreat();
  };

  if (!achievementSection.display) return null;

  const displayIdx = anim ? anim.newActive : activeIdx;

  // Build slot list. Each slot: { cardIdx, dataPos, animClass }.
  // React key = cardIdx so the same DOM node is reused as positions change,
  // which lets CSS transitions fire on the transform/opacity properties.
  let slots;

  if (!anim) {
    slots = Array.from({length: total}, (_, i) => ({
      cardIdx: (activeIdx + i) % total,
      dataPos: i < 3 ? String(i) : "hidden",
      animClass: ""
    }));
  } else if (anim.dir === "next" || anim.dir === "jump") {
    // Old front fades out (stays at pos=0, opacity 1→0).
    // New front (newActive) is already behind it at pos=0, revealed as the fade happens.
    // Cards behind slide up one slot simultaneously.
    const {newActive} = anim;
    const used = new Set([activeIdx]);
    slots = [{cardIdx: activeIdx, dataPos: "0", animClass: "ach-slot--fade-out"}];
    let pos = 0;
    for (let i = 0; slots.length < total; i++) {
      const ci = (newActive + i) % total;
      if (!used.has(ci)) {
        slots.push({cardIdx: ci, dataPos: pos < 3 ? String(pos) : "hidden", animClass: ""});
        used.add(ci);
        pos++;
      }
    }
  } else {
    // dir === "prev"
    // New front fades in at pos=0 on top of everything.
    // Old front and cards behind slide back one slot simultaneously.
    const {newActive} = anim;
    const used = new Set([newActive]);
    // "enter" data-pos = same visual position as pos=0, but with no transition
    // so the card teleports there silently (it's opacity=0 during fade-in).
    slots = [{cardIdx: newActive, dataPos: "enter", animClass: "ach-slot--fade-in"}];
    let pos = 1;
    for (let i = 0; slots.length < total; i++) {
      const ci = (activeIdx + i) % total;
      if (!used.has(ci)) {
        slots.push({cardIdx: ci, dataPos: pos < 3 ? String(pos) : "hidden", animClass: ""});
        used.add(ci);
        pos++;
      }
    }
  }

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
            {/* ── Deck (60%) ── */}
            <div
              className="ach-deck-wrapper"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className={"ach-deck" + (anim ? " ach-deck--animating" : "")}
                style={{"--deck-fade-ms": `${DECK_FADE_MS}ms`}}
                aria-live="polite"
              >
                {slots.map(({cardIdx, dataPos, animClass}) => {
                  const card = cards[cardIdx];
                  const isFront = dataPos === "0" && !animClass;
                  return (
                    <div
                      key={cardIdx}
                      className={
                        "ach-deck-slot" + (animClass ? " " + animClass : "")
                      }
                      data-pos={dataPos}
                      aria-hidden={dataPos !== "0" && dataPos !== "enter" ? true : undefined}
                      onClick={isFront && !anim ? advance : undefined}
                      title={isFront && !anim ? "Click to see next card" : undefined}
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

              <div className="ach-controls">
                <span className="ach-counter" aria-live="polite" aria-atomic="true">
                  {displayIdx + 1} / {total}
                </span>
              </div>
            </div>

            {/* ── Index (40%) ── */}
            <nav className="ach-index" aria-label="Achievement list">
              {cards.map((card, i) => (
                <button
                  key={i}
                  className={
                    "ach-index-btn" +
                    (i === displayIdx ? " ach-index-btn--active" : "")
                  }
                  aria-label={`Show: ${card.title}`}
                  aria-current={i === displayIdx ? "true" : undefined}
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
