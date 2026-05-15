import React, { useContext } from "react";
import "./ImpactNumbers.scss";
import StyleContext from "../../contexts/StyleContext";

const stats = [
  { value: "64% → 83%", label: "Object detection accuracy" },
  { value: "30,000", label: "Synthetic training images generated" },
  { value: "50", label: "Beta clients served" },
  { value: "1", label: "IEEE peer-reviewed publication" }
];

export default function ImpactNumbers() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "impact-strip impact-strip-dark" : "impact-strip"}>
      {stats.map((stat, i) => (
        <div className="impact-item" key={i}>
          <span className="impact-value">{stat.value}</span>
          <span className="impact-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
