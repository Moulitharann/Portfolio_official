import React, { useState, useMemo } from "react";

import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const [activeCategory, setActiveCategory] = useState("All");

	const categories = useMemo(() => {
		const cats = ["All"];
		INFO.projects.forEach((p) => {
			if (p.category && !cats.includes(p.category)) {
				cats.push(p.category);
			}
		});
		return cats;
	}, []);

	const filteredProjects = useMemo(() => {
		if (activeCategory === "All") return INFO.projects;
		return INFO.projects.filter((p) => p.category === activeCategory);
	}, [activeCategory]);

	return (
		<div className="all-projects-wrapper">
			<div className="projects-filter-bar">
				{categories.map((cat, idx) => (
					<button
						key={idx}
						className={`project-filter-btn ${
							activeCategory === cat ? "active" : ""
						}`}
						onClick={() => setActiveCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			<div className="all-projects-grid">
				{filteredProjects.map((project, index) => (
					<div className="all-projects-item" key={project.title || index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							tags={project.tags}
							category={project.category}
							badge={project.badge}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProjects;

