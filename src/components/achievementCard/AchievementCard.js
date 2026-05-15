import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode ach-card" : "ach-card"}>
      <div className="ach-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="ach-roundedimg"
        />
      </div>
      <div className="ach-content">
        <h5 className="ach-title">{cardInfo.title}</h5>
        {cardInfo.subtitle && (
          <p className="ach-subtitle">{cardInfo.subtitle}</p>
        )}
        {cardInfo.description && (
          <p className="ach-desc">{cardInfo.description}</p>
        )}
        {cardInfo.footer && cardInfo.footer.length > 0 && (
          <div className="ach-footer">
            {cardInfo.footer.map((v, i) => (
              <span
                key={i}
                className={isDark ? "dark-mode ach-tag" : "ach-tag"}
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                {v.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
