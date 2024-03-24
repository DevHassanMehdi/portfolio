import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <br></br>
          My Responsibilities:
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
                <br></br>
          Technologies Used:
        <ul>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Python for back-end and Data Science Algorithms.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>TypeScript with React for front-end development.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Flask for API development.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Pandas, NumPy, SciPy for data processing.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>PyQt, PyTest, OpenCv, Matplotlib for data visualization.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Postgres Database.</li>
        </ul>

        <br></br>
        Main Features:
        <ul>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Hierarchical structure and employee statistics.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Turnover rates, ratings, diversity data, and predictive analysis.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Project tasks and statistics.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Cost analysis, workforce planning, and productivity insights.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Providers and purchase orders.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Product spending analysis and forecasting.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Customers, sale orders, products, and services.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Performance metrics, sales forecasting, and growth insights.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Accounts, transactions, bills, budgets, reports.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Accounting details and cost allocation forecasting.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Warehouses, inventory, shipments.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Warehouse statistics and forecasting.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>NLP-based advanced searching.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Custom machine learning recommendation system.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Employee-task assignment recommendations.</li>
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>Chat functionality for seamless communication.</li>
        </ul>
        <br></br>
        <p className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }>This innovative software integrated advanced technologies like artificial intelligence, machine learning, and deep learning to offer functionalities such as efficient project management, streamlined purchasing processes, optimized sales strategies, robust financial management, and effective warehouse management. By leveraging these cutting-edge features, the application sought to equip small businesses with the tools needed to make informed decisions, improve productivity, and drive success in a competitive market landscape.</p>
      </div>
    </div>
  );
}
