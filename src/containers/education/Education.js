import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import StackedReveal from "../../components/stackedReveal/StackedReveal";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <StackedReveal key={index} isFirst={index === 0}>
              <EducationCard school={school} />
            </StackedReveal>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
