import React, {createRef} from "react";
import {Fade, Slide} from "react-reveal";
import "./ExperienceCard.scss";

const GetDescBullets = ({descBullets, isDark}) => {
  return descBullets
    ? descBullets.map((item, i) => {
        const colonIndex = item.indexOf(": ");
        const hasBoldPrefix = colonIndex !== -1 && colonIndex < 40;
        return (
          <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {hasBoldPrefix ? (
              <>
                <strong>{item.slice(0, colonIndex + 1)}</strong>
                {item.slice(colonIndex + 1)}
              </>
            ) : (
              item
            )}
          </li>
        );
      })
    : null;
};

export default function ExperienceCard({cardInfo, isDark}) {
  const imgRef = createRef();

  return (
    <div>
      <Fade left duration={1000}>
        <div className="exp-card">
          {cardInfo.companylogo && (
            <div className="exp-card-left">
              <img
                crossOrigin="anonymous"
                ref={imgRef}
                className="exp-roundedimg"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
              />
            </div>
          )}
          <div className="exp-card-right">
            <h5 className="exp-text-company">{cardInfo.company}</h5>
            <div className="exp-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode exp-text-role"
                    : "exp-text-role"
                }
              >
                {cardInfo.role}
              </h5>
              <p
                className={
                  isDark
                    ? "dark-mode exp-text-date"
                    : "exp-text-date"
                }
              >
                {cardInfo.date}
              </p>
              <p className="exp-text-desc">{cardInfo.desc}</p>
              {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
                <div className="exp-text-bullets">
                  <ul>
                    <GetDescBullets
                      descBullets={cardInfo.descBullets}
                      isDark={isDark}
                    />
                  </ul>
                </div>
              )}
              {cardInfo.technologies && cardInfo.technologies.length > 0 && (
                <p className="exp-text-tech">
                  <strong>Technologies:</strong>{" "}
                  {cardInfo.technologies.join(", ")}
                </p>
              )}
              {cardInfo.summary && (
                <p className="exp-text-summary">{cardInfo.summary}</p>
              )}
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="exp-card-border"></div>
      </Slide>
    </div>
  );
}
