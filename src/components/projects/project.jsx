import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, tags, category, badge } = props;

	return (
		<div className="project">
			<div className="project-container">
				<div className="project-header-row">
					<div className="project-logo-wrap">
						<img src={logo} alt={title} />
					</div>
					{badge && <span className="project-badge">{badge}</span>}
				</div>

				{category && <div className="project-category">{category}</div>}
				<div className="project-title">{title}</div>
				<div className="project-description">{description}</div>

				{tags && tags.length > 0 && (
					<div className="project-tags">
						{tags.map((tag, i) => (
							<span key={i} className="project-tag">
								{tag}
							</span>
						))}
					</div>
				)}

				<div className="project-actions">
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="project-btn-primary"
					>
						<FontAwesomeIcon icon={faGithub} />
						<span>{linkText || "View on GitHub"}</span>
					</a>
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="project-btn-secondary"
					>
						<span>Details</span>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: "11px" }} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;

