import React from "react";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase
} from "react-icons/fa";
import mysqlIcon from "../icons/mysql.png";
import gitIcon from "../icons/git.png";
import "./TechStack.css";

const techCategories = [
  {
    id: "core-analytics",
    num: "01",
    title: "Core Analytics",
    icon: FaCode,
    accentColor: "#f59e0b",
    skills: [
      { name: "Microsoft Excel", role: "Spreadsheet Analysis", textIco: "XL" },
      { name: "SQL", role: "Data Querying", icon: mysqlIcon },
      { name: "Python", role: "Data Analysis", textIco: "Py" },
      { name: "PostgreSQL", role: "Relational Database", textIco: "PG" }
    ]
  },
  {
    id: "data-analysis-reporting",
    num: "02",
    title: "Data Analysis & Reporting",
    icon: FaDesktop,
    accentColor: "#38bdf8",
    skills: [
      { name: "Data Cleaning", role: "Data Preparation", textIco: "DC" },
      { name: "Data Validation", role: "Data Quality", textIco: "DV" },
      { name: "KPI Analysis", role: "Performance Measurement", textIco: "KPI" },
      { name: "MIS Reporting", role: "Operational Reports", textIco: "MIS" }
    ]
  },
  {
    id: "business-intelligence",
    num: "03",
    title: "Business Intelligence",
    icon: FaServer,
    accentColor: "#10b981",
    skills: [
      { name: "Tableau", role: "Data Visualization", textIco: "TAB" },
      { name: "Dashboard Development", role: "KPI Dashboards", textIco: "DB" },
      { name: "Sales Analysis", role: "Revenue Insights", textIco: "SA" },
      { name: "Business Reporting", role: "Decision Support", textIco: "BR" }
    ]
  },
  {
    id: "tools-platforms",
    num: "04",
    title: "Tools & Platforms",
    icon: FaDatabase,
    accentColor: "#a855f7",
    skills: [
      { name: "pgAdmin", role: "Database Management", textIco: "pA" },
      { name: "Git", role: "Version Control", icon: gitIcon },
      { name: "GitHub", role: "Project Portfolio", textIco: "GH" },
      { name: "Microsoft Excel", role: "Reporting Workbooks", textIco: "XL" }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="stack" className="tech-section">
      <div className="tech-container">
        {/* Section Header */}
        <div className="tech-header-compact">
          <div className="tech-meta-pill">
            <span className="meta-index">02</span>
            <span className="meta-divider">{"//"}</span>
            <span className="meta-title">PRODUCTION STACK</span>
          </div>
          <h2 className="tech-compact-heading">Technical Arsenal</h2>
          <p className="tech-compact-sub">
            Curated production technologies across core analytics, reporting, business intelligence, and data platforms.
          </p>
        </div>

        {/* ── COMPACT 4-QUADRANT BENTO MATRIX ── */}
        <div className="tech-bento-grid">
          {techCategories.map((cat) => {
            const CatIcon = cat.icon;

            return (
              <div
                key={cat.id}
                className="tech-bento-card"
                style={{ "--cat-accent": cat.accentColor }}
              >
                {/* Quadrant Header */}
                <div className="bento-card-header">
                  <div className="header-left-group">
                    <span className="bento-num-tag">{cat.num}</span>
                    <h3 className="bento-cat-title">{cat.title}</h3>
                  </div>
                  <div className="bento-icon-badge">
                    <CatIcon size={14} style={{ color: cat.accentColor }} />
                  </div>
                </div>

                {/* Skills Compact List */}
                <div className="bento-skills-list">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-item-row">
                      <div className="skill-identity">
                        {skill.icon ? (
                          <img src={skill.icon} alt={skill.name} className="skill-ico-img" />
                        ) : (
                          <span className="skill-text-ico">{skill.textIco}</span>
                        )}
                        <span className="skill-name-text">{skill.name}</span>
                      </div>
                      <span className="skill-role-badge">{skill.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
