import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import "./Projects.css";

const analyticsProjects = [
  {
    num: "01",
    collapsedLabel: "SALES INTELLIGENCE",
    title: "Enterprise Sales Performance & Revenue Intelligence System",
    client: "Revenue & Profitability Intelligence",
    badge: "EXECUTIVE DASHBOARD",
    stack: ["Microsoft Excel", "KPI Reporting", "PivotTables", "Data Cleaning"],
    summary: "Analyzed 1,262 synthetic sales records using data cleaning, validation, revenue analysis, profitability analysis, KPI calculations and an executive dashboard featuring 7 charts.",
    description: "Analyzed 1,262 synthetic sales records using data cleaning, validation, revenue analysis, profitability analysis, KPI calculations and an executive dashboard featuring 7 charts to support data-driven business decisions.",
    highlights: [
      "Data Cleaning & Validation",
      "Revenue and Profit Analysis",
      "Regional and Product Performance",
      "KPI Reporting",
      "Executive Dashboard"
    ],
    github: "https://github.com/GokulS-dev/Enterprise-Sales-Performance-Revenue-Intelligence-System",
    tagline: "Enterprise Revenue Intelligence",
  },
  {
    num: "02",
    collapsedLabel: "SALES OPERATIONS MIS",
    title: "Sales Operations MIS & Monthly Performance Reporting",
    client: "Operations & Performance Monitoring",
    badge: "MIS REPORTING",
    stack: ["Microsoft Excel", "PivotTables", "PivotCharts", "Operations Tracking"],
    summary: "Developed an Excel-based MIS reporting system using 900 synthetic sales records for daily sales tracking, monthly reporting, employee performance monitoring and operational exception tracking.",
    description: "Developed an Excel-based MIS reporting system using 900 synthetic sales records for daily sales tracking, monthly reporting, employee performance monitoring and operational exception tracking.",
    highlights: [
      "Monthly MIS Reporting",
      "PivotTables & PivotCharts",
      "Employee Target Achievement",
      "Pending and Cancelled Order Tracking",
      "Management Dashboard"
    ],
    tagline: "Sales MIS & Performance Monitoring",
  },
  {
    num: "03",
    collapsedLabel: "REGIONAL SALES",
    title: "Sales Performance & Regional Insights Dashboard",
    client: "Sales Analytics Solution",
    badge: "TABLEAU DASHBOARD",
    stack: ["PostgreSQL", "SQL", "Tableau"],
    summary: "Building a sales analytics solution using PostgreSQL and SQL to analyze revenue trends, regional performance, product contribution and monthly sales growth, with interactive Tableau dashboards.",
    description: "Building a sales analytics solution using PostgreSQL and SQL to analyze revenue trends, regional performance, product contribution and monthly sales growth, with interactive Tableau dashboards.",
    highlights: [
      "Revenue Trends & Growth Analytics",
      "Regional Sales Distribution Analysis",
      "Product Contribution Matrix",
      "PostgreSQL Relational Schema",
      "Interactive Tableau Dashboards"
    ],
    tagline: "Regional Sales & Revenue Analytics",
  },
  {
    num: "04",
    collapsedLabel: "CUSTOMER & PRODUCT",
    title: "Customer & Product Analytics Dashboard",
    client: "Customer Intelligence Platform",
    badge: "CUSTOMER ANALYTICS",
    stack: ["PostgreSQL", "SQL", "Tableau"],
    summary: "Developing customer and product analytics using SQL to examine purchasing patterns, order frequency, customer segments and product performance, with Tableau visualizations.",
    description: "Developing customer and product analytics using SQL to examine purchasing patterns, order frequency, customer segments and product performance, with Tableau visualizations.",
    highlights: [
      "Purchasing Pattern Examination",
      "Order Frequency & Recency Modeling",
      "Customer Segmentation Models",
      "Product Velocity & Performance",
      "Tableau Visualizations"
    ],
    tagline: "Customer Segments & Product Analytics",
  }
];

const webProjects = [
  {
    num: "01",
    collapsedLabel: "DIGITAL TRIAL CARD",
    title: "Digital Trial Card & Workflow System",
    client: "Sakthi Auto Component Limited",
    badge: "ENTERPRISE SYSTEM",
    stack: ["React", "Node.js", "Express", "SQL Server"],
    summary: "A full-stack workflow management system for multi-department trial processes.",
    description: "Architected an enterprise workflow portal that digitizes industrial trial card tracking across Quality, Metallurgy, Production, and Dispatch divisions. Eliminates physical paperwork bottlenecks through multi-department approval pipelines and real-time stage transitions.",
    highlights: [
      "Multi-department sequential & parallel approval pipelines with stage locks",
      "Role-Based Access Control (RBAC) with JWT session integrity & audit trails",
      "Automated stage-transition triggers, event notifications, and email alerts",
      "High-integrity SQL Server relational schema for heavy industrial throughput"
    ],
    tagline: "Industrial Manufacturing Digitization",
  },
  {
    num: "02",
    collapsedLabel: "ONLINE EXAM PORTAL",
    title: "Student Online Exam Portal",
    client: "Assessment & Evaluation Platform",
    badge: "REAL-TIME LMS",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    summary: "Examination platform with authentication, role-based dashboards and automated evaluation.",
    description: "Engineered a scalable web-based examination platform supporting concurrent test sessions. Features automated question randomization, real-time timer synchronization, anti-cheat detection on window blur, and instant performance grading.",
    highlights: [
      "Role-based portals for Exam Administrators, Faculty, and Students",
      "Real-time countdown timer with automated fail-safe submission",
      "Automated evaluation engine with detailed question-wise breakdown",
      "MongoDB aggregation pipeline for student performance analytics"
    ],
    github: "https://github.com/GokulS-dev/online_exam_portal",
    tagline: "Secure Real-Time Assessment Engine",
  },
  {
    num: "03",
    collapsedLabel: "ACTIVITY MONITORING",
    title: "Student Activity Monitoring Portal",
    client: "Student / Faculty Workflow Platform",
    badge: "WORKFLOW PLATFORM",
    stack: ["React", "Node.js", "Express", "MySQL"],
    summary: "Submission · Approval · Profile workflows with weighted points.",
    description: "A centralized institutional portal designed to monitor and evaluate student co-curricular and extracurricular performance. Students submit participation proof which faculty mentors verify through structured approval queues to compute weighted activity points.",
    highlights: [
      "Multi-stage workflow: Student Submission → Faculty Verification → Department Approval",
      "Automated Activity Point calculator ledger based on category weights",
      "Document upload and digital verification preview interface",
      "Profile portfolio generator showcasing verified accomplishments"
    ],
    github: "https://github.com/GokulS-dev/Student_Activity_Point_Calc",
    tagline: "Institutional Verification Ledger",
  },
  {
    num: "04",
    collapsedLabel: "STREAMLINE KAFKA",
    title: "Streamline with Apache Kafka",
    client: "Thinkathon '24 · 1st Prize Winner",
    badge: "🥇 1ST PRIZE WINNER",
    stack: ["Apache Kafka", "Python", "Data Pipelines"],
    summary: "Real-time distributed data streaming pipeline using Apache Kafka.",
    description: "Built high-throughput real-time event streaming pipeline processing high-frequency data feeds with fault tolerance, partitioned message queues, and consumer group scaling.",
    highlights: [
      "Distributed pub-sub architecture using Apache Kafka brokers",
      "Fault-tolerant consumer workers with automatic failover recovery",
      "Low-latency throughput optimization for event stream processing"
    ],
    github: "https://github.com/GokulS-dev/StreamlineProcessing_Using_KAFKA",
    tagline: "Distributed Data Stream Engine",
  },
  {
    num: "05",
    collapsedLabel: "ISTE EVENTS HUB",
    title: "ISTE Events Discovery Hub",
    client: "Indian Society for Technical Education",
    badge: "🥇 1ST PRIZE WINNER",
    stack: ["React", "Bootstrap", "REST API"],
    summary: "Centralized event hub for national technical workshops and hackathons.",
    description: "Designed an award-winning event discovery platform that simplifies registration, scheduling, and live tracking for national engineering hackathons and technical symposiums.",
    highlights: [
      "Dynamic event directory with filtering by category, date, and prize pools",
      "Interactive agenda builder with calendar export capabilities",
      "Mobile-first responsive architecture supporting high burst traffic"
    ],
    github: "https://github.com/GokulS-dev/ISTE-Events",
    link: "https://iste-events.netlify.app/",
    tagline: "National Technical Symposiums",
  }
];

// Additional projects
const additionalProjects = [
  {
    num: "06",
    title: "Real-Time Climate & Weather Monitoring",
    category: "Full Stack IoT Analytics",
    stack: ["React", "Node.js", "Express", "MongoDB", "Weather API"],
    summary: "Real-time meteorological analytics dashboard with time-series aggregation.",
    github: "https://github.com/GokulS-dev/Weather-Monitoring",
    link: "https://weather-monitoring-we31.onrender.com/",
  },
  {
    num: "07",
    title: "SmartEzyGo Mobile Application",
    category: "Cross-Platform Mobile App",
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore"],
    summary: "Cross-platform mobile utility system streamlining everyday societal tasks.",
    github: "https://github.com/GokulS-dev/SmartEzyGo",
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("analytics");
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showArchive, setShowArchive] = useState(false);

  const currentProjects = activeCategory === "analytics" ? analyticsProjects : webProjects;
  const total = currentProjects.length;

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setActiveIdx(0);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalProject) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const isAnalytics = activeCategory === "analytics";
  const headerTitle = isAnalytics
    ? "DATA ANALYTICS & BUSINESS INTELLIGENCE"
    : "ENGINEERED SYSTEMS & PRODUCTS";
  const headerSubtitle = isAnalytics
    ? "Transforming raw data into actionable insights through Excel, SQL, PostgreSQL and Tableau."
    : "Reliable web applications, production workflows, and distributed backends.";

  return (
    <section id="work" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="collection-header-row">
          <div className="collection-header-text">
            <span className="collection-meta-tag">✦ DISCOVER SELECTED WORK</span>
            <h2 className="collection-main-title">{headerTitle}</h2>
            <p className="collection-sub-text">{headerSubtitle}</p>
          </div>

          {/* Top-Right Stepper & Counter */}
          <div className="collection-nav-stepper">
            <span className="collection-counter">
              {String(activeIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="collection-arrows">
              <button
                className="coll-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous project"
              >
                <FaChevronLeft size={13} />
              </button>
              <button
                className="coll-arrow-btn"
                onClick={handleNext}
                aria-label="Next project"
              >
                <FaChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Project Category Navigation Tabs */}
        <div className="category-nav-bar">
          <div className="project-category-tabs" role="tablist" aria-label="Project Categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "analytics"}
              className={`category-tab-btn ${activeCategory === "analytics" ? "active" : ""}`}
              onClick={() => handleCategoryChange("analytics")}
            >
              <span className="tab-indicator" />
              <span>DATA ANALYTICS</span>
              <span className="category-count">04</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "web"}
              className={`category-tab-btn ${activeCategory === "web" ? "active" : ""}`}
              onClick={() => handleCategoryChange("web")}
            >
              <span className="tab-indicator" />
              <span>WEB DEVELOPMENT</span>
              <span className="category-count">05</span>
            </button>
          </div>
        </div>

        {/* ── EXPANDING FLOATING HORIZONTAL STACK DECK ── */}
        <div className="expanding-cards-deck">
          {currentProjects.map((project, idx) => {
            const isExpanded = idx === activeIdx;
            const isLeftmostInDeck = idx === 0 || (activeIdx === 0 && idx === 1);
            const isRightmostInDeck = idx === total - 1 || (activeIdx === total - 1 && idx === total - 2);
            const isAdjacentLeft = idx === activeIdx - 1;
            const isAdjacentRight = idx === activeIdx + 1;

            let collapsedClasses = "card-collapsed";
            if (isLeftmostInDeck) collapsedClasses += " deck-leftmost";
            if (isRightmostInDeck) collapsedClasses += " deck-rightmost";
            if (isAdjacentLeft) collapsedClasses += " card-adjacent-left";
            if (isAdjacentRight) collapsedClasses += " card-adjacent-right";

            return (
              <div
                key={project.num}
                className={`deck-card-panel ${isExpanded ? "card-expanded" : collapsedClasses}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => {
                  if (!isExpanded) {
                    setActiveIdx(idx);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={project.title}
                onKeyDown={(e) => e.key === "Enter" && setActiveIdx(idx)}
              >
                {/* Card Background */}
                <div className="card-bg-wrap">
                  <div className="card-scrim-gradient" />
                </div>

                {/* ── COLLAPSED VIEW: SLIM VERTICAL CARD ── */}
                <div className="collapsed-content-layer">
                  {/* Top Pill Number */}
                  <div className="collapsed-top-pill">
                    <span>{project.num}</span>
                  </div>

                  {/* Vertical Rotated Title */}
                  <div className="collapsed-vertical-text">
                    <span>{project.collapsedLabel}</span>
                  </div>

                  {/* Bottom Circle Arrow Button */}
                  <div className="collapsed-bottom-circle">
                    <FaArrowRight size={11} className="collapsed-arrow-ico" />
                  </div>
                </div>

                {/* ── EXPANDED VIEW: FLOATING HERO CARD ── */}
                <div className="expanded-content-layer">
                  {/* Top Bar inside Card */}
                  <div className="expanded-top-bar">
                    <span className="expanded-badge-pill">{project.badge}</span>
                    <span className="expanded-counter-pill">
                      {project.num} / {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Bottom Content inside Card */}
                  <div className="expanded-bottom-block">
                    <span className="expanded-client-tag">{project.client}</span>
                    <h3 className="expanded-title-heading">{project.title}</h3>
                    <p className="expanded-summary-desc">{project.summary}</p>

                    {/* Tech Pills */}
                    <div className="expanded-tech-strip">
                      {project.stack.map((t) => (
                        <span key={t} className="expanded-tech-badge">{t}</span>
                      ))}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="expanded-actions-row">
                      <button
                        className="btn-explore-pill"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalProject(project);
                        }}
                      >
                        <span>EXPLORE SYSTEM</span>
                        <FaArrowRight size={12} className="explore-arrow" />
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-action-ghost"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`View ${project.title} repository`}
                        >
                          <FaGithub size={14} />
                          <span>Code</span>
                        </a>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-action-ghost"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Open ${project.title} live demo`}
                        >
                          <FaExternalLinkAlt size={12} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Work Archive Toggle */}
        {activeCategory === "web" && (
          <div className="deck-archive-toggle">
            <button
              className="archive-toggle-btn"
              onClick={() => setShowArchive(!showArchive)}
            >
              <span>{showArchive ? "Hide Additional Projects" : "View More Works & IoT Dashboards (2)"}</span>
              <span className="toggle-sym">{showArchive ? "↑" : "↓"}</span>
            </button>
          </div>
        )}

        {/* Secondary Projects Grid */}
        {activeCategory === "web" && showArchive && (
          <div className="additional-projects-grid">
            {additionalProjects.map((item) => (
              <div key={item.num} className="additional-card-item" onClick={() => setActiveModalProject(item)}>
                <div className="add-body">
                  <div className="add-header-row">
                    <span className="add-cat">{item.category}</span>
                    <span className="add-num-tag">{item.num}</span>
                  </div>
                  <h4 className="add-title">{item.title}</h4>
                  <p className="add-summary">{item.summary}</p>
                  <div className="add-tech">{item.stack.join(" · ")}</div>
                  <div className="add-actions">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="add-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={12} /> Source
                      </a>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="add-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={11} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* System Architecture Details Modal */}
      {activeModalProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="project-modal-window"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-num">{`${activeModalProject.num} // ${isAnalytics ? "DATA ANALYTICS" : "ARCHITECTURAL"} SPECIFICATION`}</span>
                <h3 id="modal-title" className="modal-title">{activeModalProject.title}</h3>
                <span className="modal-client">{activeModalProject.client}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <FaTimes size={16} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-content-section">
                <h4>{isAnalytics ? "Project Overview & Analytics Scope" : "System Architecture & Engineering Implementation"}</h4>
                <p className="modal-full-desc">{activeModalProject.description || activeModalProject.summary}</p>

                {activeModalProject.highlights && (
                  <>
                    <h4>{isAnalytics ? "Key Analytics & Technical Highlights" : "Key Engineering Highlights"}</h4>
                    <ul className="modal-highlights">
                      {activeModalProject.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </>
                )}

                <h4>{isAnalytics ? "Analytics Tools & Technologies" : "Production Technology Stack"}</h4>
                <div className="modal-stack-pills">
                  {activeModalProject.stack.map((t) => (
                    <span key={t} className="modal-stack-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {activeModalProject.github && (
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal-primary"
                >
                  <FaGithub size={14} />
                  <span>View Repository</span>
                </a>
              )}
              {activeModalProject.link && (
                <a
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal-primary"
                >
                  <FaExternalLinkAlt size={13} />
                  <span>Open Live Demo</span>
                </a>
              )}
              <button
                className="btn-modal-secondary"
                onClick={() => setActiveModalProject(null)}
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
