import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
<<<<<<< HEAD
=======
	faleetcode,
>>>>>>> f81aa5e (updated)
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
<<<<<<< HEAD

=======
import Article from "../components/homepage/article";
>>>>>>> f81aa5e (updated)
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
<<<<<<< HEAD
=======
import myArticles from "../data/articles";
>>>>>>> f81aa5e (updated)

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const initialTitle = (INFO.homepage.title)
	const targetTitle = " WEB DEVELOPER..";
	const [title, setTitle] = useState(initialTitle);
  
	useEffect(() => {
	  const timeout = setTimeout(() => {
		updateTitle(initialTitle, targetTitle);
	  }, 1500);
  
	  return () => clearTimeout(timeout);
	}, []);
  
<<<<<<< HEAD
	const updateTitle = ( target) => {

=======
	const updateTitle = (initial, target) => {
	 // const initialWords = initial.split(" ");
>>>>>>> f81aa5e (updated)
	  const targetWords = target.split(" ");
	  
	  let currentWordIndex = 1; // Start at index 1 to update "Software Developer"
	  let charIndex = 0;
	  let currentTitle = targetWords.slice(0, currentWordIndex).join(" ") + " ";
  
	  const updateChar = () => {
		if (currentWordIndex < targetWords.length) {
		  if (charIndex < targetWords[currentWordIndex].length) {
			currentTitle = targetWords.slice(0, currentWordIndex).join(" ") + " ";
			currentTitle += targetWords[currentWordIndex].substring(0, charIndex + 1);
			setTitle(currentTitle);
			charIndex++;
			setTimeout(updateChar, 100); // Adjust speed as needed
		  } else {
			currentWordIndex++;
			charIndex = 0;
			setTimeout(updateChar, 100);
		  }
		}
	  };
  
	  updateChar();
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title" style={{ color: '' }}>
								ASPIRING <span style={{ color: 'red' }}>{title}</span>
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="https://www.appletechsoft.com/wp-content/uploads/2022/02/Full-Stack-vs-MEAN-Stack-vs-MERN-Stack-1.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.leetcode}
								target="_blank"
								rel="noreferrer"
							>
								<img className="images" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3270180/leetcode-icon-md.png" alt="" />
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						{/* <div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
*/}
							<div className="homepage-works">
								<Works />
							</div>
						{/* </div>  */}

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
