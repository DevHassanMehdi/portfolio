import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="proj-cards-div">
            {bigProjects.projects.map((project, i) => (
              <div key={i}>
                <Fade left duration={1000}>
                  <div className="proj-card">
                    {project.image && (
                      <div className="proj-card-left">
                        <img
                          className="proj-roundedimg"
                          src={project.image}
                          alt={project.projectName}
                        />
                      </div>
                    )}
                    <div
                      className={
                        project.image ? "proj-card-right" : "proj-card-right-full"
                      }
                    >
                      <h5 className="proj-text-name">{project.projectName}</h5>
                      <div className="proj-text-details">
                        <p className="proj-text-desc">{project.projectDesc}</p>
                        {(project.projectHighlights || project.descBullets) && (
                          <div className="proj-text-bullets">
                            <ul>
                              {(project.projectHighlights || project.descBullets).map(
                                (item, idx) => (
                                  <li
                                    key={idx}
                                    className={
                                      isDark ? "subTitle dark-mode-text" : "subTitle"
                                    }
                                  >
                                    {item}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                        {project.techStack && project.techStack.length > 0 && (
                          <div className="proj-badges">
                            {project.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className={
                                  isDark ? "dark-mode proj-badge" : "proj-badge"
                                }
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        {project.footerLink && project.footerLink.length > 0 && (
                          <div className="proj-footer">
                            {project.footerLink.map((link, j) => (
                              <span
                                key={j}
                                className={
                                  isDark ? "dark-mode proj-tag" : "proj-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Fade>
                <Slide left duration={2000}>
                  <div className="proj-card-border"></div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
