import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDownload,
	faExternalLinkAlt,
	faBriefcase,
	faGraduationCap,
	faCertificate,
	faCode,
	faCheckCircle,
	faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Resumepdf from "./styles/Resume.pdf";
import INFO from "../../data/user";
import "./styles/works.css";

const Works = () => {

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = Resumepdf;
		link.download = "Moulitharan_M_Resume.pdf";
		link.click();
	};

	const handleViewPdf = () => {
		window.open(Resumepdf, "_blank");
	};

	return (
		<div className="resume-section">
			<div className="resume-section-header">
				<div>
					<div className="resume-badge">
						<FontAwesomeIcon icon={faFilePdf} />
						<span>UPDATED RESUME 2025–2026</span>
					</div>
					<h2 className="resume-main-title">Professional Resume</h2>
					<p className="resume-main-subtitle">
						Backend Software Engineer with 1+ year hands-on experience in ASP.NET Core, SQL Server & Azure.
					</p>
				</div>
				<div className="resume-header-actions">
					<button onClick={handleDownload} className="resume-btn-primary">
						<FontAwesomeIcon icon={faDownload} />
						<span>Download PDF</span>
					</button>
					<button onClick={handleViewPdf} className="resume-btn-secondary">
						<FontAwesomeIcon icon={faExternalLinkAlt} />
						<span>View Full PDF</span>
					</button>
				</div>
			</div>

			<div className="resume-digital-card">
				{/* Header Info */}
				<div className="resume-card-top">
					<div className="resume-person-info">
						<h1 className="resume-person-name">MOULITHARAN M</h1>
						<p className="resume-person-role">Backend Software Engineer</p>
						<p className="resume-person-meta">
							{INFO.main.location} • {INFO.main.phone} • {INFO.main.email}
						</p>
					</div>
					<div className="resume-quick-links">
						<a
							href={INFO.socials.github}
							target="_blank"
							rel="noreferrer"
							className="resume-pill-link"
						>
							<FontAwesomeIcon icon={faGithub} /> GitHub
						</a>
						<a
							href={INFO.socials.linkedin}
							target="_blank"
							rel="noreferrer"
							className="resume-pill-link"
						>
							<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
						</a>
						<a
							href={INFO.socials.leetcode}
							target="_blank"
							rel="noreferrer"
							className="resume-pill-link"
						>
							⚡ LeetCode
						</a>
					</div>
				</div>

				{/* Professional Summary */}
				<div className="resume-card-section">
					<h3 className="resume-section-heading">Professional Summary</h3>
					<p className="resume-summary-body">
						Backend Software Engineer with 1+ year of experience designing and operating REST APIs and high-volume data services on ASP.NET Core, SQL Server, and Microsoft Azure. Strong fundamentals in data structures, algorithms, and system design, with hands-on experience in stored procedure optimization, JWT/RBAC security, and building reliable, scalable backend services across C#, Python, Java, and JavaScript.
					</p>
				</div>

				{/* Technical Skills Matrix */}
				<div className="resume-card-section">
					<h3 className="resume-section-heading">
						<FontAwesomeIcon icon={faCode} style={{ marginRight: "8px", color: "#0d9488" }} />
						Technical Skills
					</h3>
					<div className="resume-skills-matrix">
						<div className="resume-skill-group">
							<span className="skill-group-title">Languages</span>
							<div className="skill-tags">
								{INFO.skills.languages.map((s, i) => (
									<span key={i} className="skill-tag">{s}</span>
								))}
							</div>
						</div>
						<div className="resume-skill-group">
							<span className="skill-group-title">Backend & APIs</span>
							<div className="skill-tags">
								{INFO.skills.backend.map((s, i) => (
									<span key={i} className="skill-tag skill-tag-accent">{s}</span>
								))}
							</div>
						</div>
						<div className="resume-skill-group">
							<span className="skill-group-title">Databases</span>
							<div className="skill-tags">
								{INFO.skills.databases.map((s, i) => (
									<span key={i} className="skill-tag">{s}</span>
								))}
							</div>
						</div>
						<div className="resume-skill-group">
							<span className="skill-group-title">Cloud & DevOps</span>
							<div className="skill-tags">
								{INFO.skills.cloud.map((s, i) => (
									<span key={i} className="skill-tag">{s}</span>
								))}
							</div>
						</div>
						<div className="resume-skill-group">
							<span className="skill-group-title">Core Concepts</span>
							<div className="skill-tags">
								{INFO.skills.concepts.map((s, i) => (
									<span key={i} className="skill-tag">{s}</span>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Work Experience */}
				<div className="resume-card-section">
					<h3 className="resume-section-heading">
						<FontAwesomeIcon icon={faBriefcase} style={{ marginRight: "8px", color: "#2563eb" }} />
						Work Experience
					</h3>
					<div className="resume-timeline">
						{INFO.experience.map((exp, idx) => (
							<div key={idx} className="timeline-item">
								<div className="timeline-marker"></div>
								<div className="timeline-content">
									<div className="timeline-header">
										<h4 className="timeline-role">{exp.role} — <span className="timeline-company">{exp.company}</span></h4>
										<span className="timeline-period">{exp.period}</span>
									</div>
									<div className="timeline-location">{exp.location}</div>

									{exp.projects && exp.projects.map((proj, pIdx) => (
										<div key={pIdx} className="timeline-subproject">
											<div className="subproject-title">{proj.name}</div>
											<ul className="timeline-points">
												{proj.points.map((pt, ptIdx) => (
													<li key={ptIdx}>
														<FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
														<span>{pt}</span>
													</li>
												))}
											</ul>
										</div>
									))}

									{exp.points && (
										<ul className="timeline-points" style={{ marginTop: "10px" }}>
											{exp.points.map((pt, ptIdx) => (
												<li key={ptIdx}>
													<FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
													<span>{pt}</span>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Education & Certifications */}
				<div className="resume-card-two-col">
					<div className="resume-card-col">
						<h3 className="resume-section-heading">
							<FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: "8px", color: "#8b5cf6" }} />
							Education
						</h3>
						{INFO.education.map((edu, eIdx) => (
							<div key={eIdx} className="edu-card">
								<div className="edu-degree">{edu.degree}</div>
								<div className="edu-institution">{edu.institution}</div>
								<div className="edu-meta">
									<span>{edu.period}</span> • <strong className="edu-score">{edu.score}</strong>
								</div>
							</div>
						))}
					</div>

					<div className="resume-card-col">
						<h3 className="resume-section-heading">
							<FontAwesomeIcon icon={faCertificate} style={{ marginRight: "8px", color: "#f59e0b" }} />
							Certifications
						</h3>
						<ul className="cert-list">
							{INFO.certifications.map((cert, cIdx) => (
								<li key={cIdx} className="cert-item">
									<span className="cert-dot"></span>
									<span>{cert}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Card Bottom CTA */}
				<div className="resume-card-footer">
					<span>Need a printer-friendly copy?</span>
					<button onClick={handleDownload} className="resume-footer-btn">
						<FontAwesomeIcon icon={faDownload} /> Download PDF Version
					</button>
				</div>
			</div>
		</div>
	);
};

export default Works;
