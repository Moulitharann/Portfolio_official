import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faLocationDot,
	faPaperPlane,
	faCheck,
	faCopy,
	faUser,
	faTag,
	faCommentDots,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(INFO.main.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2500);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);

			// Trigger native mailto link as reliable backup
			const subjectText = encodeURIComponent(
				formData.subject || `Inquiry from ${formData.name}`
			);
			const bodyText = encodeURIComponent(
				`Hello Moulitharan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
			);
			const mailtoLink = `mailto:${INFO.main.email}?subject=${subjectText}&body=${bodyText}`;
			
			// Optional: open mail client
			window.location.href = mailtoLink;
		}, 900);
	};

	const handleReset = () => {
		setFormData({ name: "", email: "", subject: "", message: "" });
		setIsSubmitted(false);
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-header-area">
						<div className="contact-badge">
							<span className="contact-badge-dot"></span>
							<span>LET'S CONNECT & COLLABORATE</span>
						</div>
						<h1 className="title contact-title">
							Get in Touch with Moulitharan
						</h1>
						<p className="subtitle contact-subtitle">
							Whether you have a software engineering opportunity, want to collaborate on backend and AI projects, or just want to discuss technology, I'm always excited to connect!
						</p>
					</div>

					<div className="contact-main-grid">
						{/* Left Column: Direct Info Cards */}
						<div className="contact-cards-column">
							{/* Email Card */}
							<div className="contact-info-card">
								<div className="contact-card-icon-wrap icon-cyan">
									<FontAwesomeIcon icon={faEnvelope} />
								</div>
								<div className="contact-card-content">
									<div className="contact-card-label">Email Directly</div>
									<a
										href={`mailto:${INFO.main.email}`}
										className="contact-card-value"
									>
										{INFO.main.email}
									</a>
								</div>
								<button
									onClick={handleCopyEmail}
									className={`copy-btn ${copied ? "copied" : ""}`}
									title="Copy email to clipboard"
								>
									<FontAwesomeIcon icon={copied ? faCheck : faCopy} />
									<span>{copied ? "Copied!" : "Copy"}</span>
								</button>
							</div>

							{/* Phone / WhatsApp Card */}
							<div className="contact-info-card">
								<div className="contact-card-icon-wrap icon-green">
									<FontAwesomeIcon icon={faPhone} />
								</div>
								<div className="contact-card-content">
									<div className="contact-card-label">Phone & WhatsApp</div>
									<a
										href={`tel:${INFO.main.phone.replace(/\s+/g, "")}`}
										className="contact-card-value"
									>
										{INFO.main.phone}
									</a>
								</div>
							</div>

							{/* Location Card */}
							<div className="contact-info-card">
								<div className="contact-card-icon-wrap icon-purple">
									<FontAwesomeIcon icon={faLocationDot} />
								</div>
								<div className="contact-card-content">
									<div className="contact-card-label">Current Base</div>
									<div className="contact-card-value-text">
										{INFO.main.location}
									</div>
								</div>
							</div>

							{/* Response Guarantee Badge */}
							<div className="contact-response-pill">
								<FontAwesomeIcon icon={faClock} style={{ color: "#0d9488" }} />
								<span>Quick response: usually within 24 hours</span>
							</div>

							{/* Social Profiles Grid */}
							<div className="contact-socials-box">
								<div className="socials-box-title">Professional Profiles</div>
								<div className="socials-box-grid">
									<a
										href={INFO.socials.github}
										target="_blank"
										rel="noreferrer"
										className="social-profile-chip"
									>
										<FontAwesomeIcon icon={faGithub} />
										<span>GitHub</span>
									</a>
									<a
										href={INFO.socials.linkedin}
										target="_blank"
										rel="noreferrer"
										className="social-profile-chip"
									>
										<FontAwesomeIcon icon={faLinkedin} />
										<span>LinkedIn</span>
									</a>
									<a
										href={INFO.socials.leetcode}
										target="_blank"
										rel="noreferrer"
										className="social-profile-chip"
									>
										<span>⚡ LeetCode</span>
									</a>
									<a
										href={INFO.socials.twitter}
										target="_blank"
										rel="noreferrer"
										className="social-profile-chip"
									>
										<FontAwesomeIcon icon={faTwitter} />
										<span>Twitter / X</span>
									</a>
									<a
										href={INFO.socials.instagram}
										target="_blank"
										rel="noreferrer"
										className="social-profile-chip"
									>
										<FontAwesomeIcon icon={faInstagram} />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>

						{/* Right Column: Premium Form */}
						<div className="contact-form-column">
							<div className="contact-form-card">
								<div className="form-card-header">
									<h2 className="form-card-title">Send a Direct Message</h2>
									<p className="form-card-subtitle">
										Fill out the form below and I'll receive your message directly.
									</p>
								</div>

								{isSubmitted ? (
									<div className="form-success-box">
										<div className="success-icon-wrap">
											<FontAwesomeIcon icon={faCheck} />
										</div>
										<h3 className="success-title">Message Prepared & Sent!</h3>
										<p className="success-desc">
											Thank you for reaching out, <strong>{formData.name}</strong>. Your message is prepared and your email client has been opened. I look forward to speaking with you!
										</p>
										<button
											onClick={handleReset}
											className="send-another-btn"
										>
											Send Another Message
										</button>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="modern-contact-form">
										<div className="form-row-two">
											<div className="form-field-group">
												<label htmlFor="name" className="field-label">
													<FontAwesomeIcon icon={faUser} className="field-icon" />
													<span>Your Name</span>
													<span className="required-star">*</span>
												</label>
												<input
													type="text"
													id="name"
													name="name"
													placeholder="e.g. Alex Johnson"
													value={formData.name}
													onChange={handleInputChange}
													required
													className="modern-input"
												/>
											</div>

											<div className="form-field-group">
												<label htmlFor="email" className="field-label">
													<FontAwesomeIcon icon={faEnvelope} className="field-icon" />
													<span>Your Email</span>
													<span className="required-star">*</span>
												</label>
												<input
													type="email"
													id="email"
													name="email"
													placeholder="alex@company.com"
													value={formData.email}
													onChange={handleInputChange}
													required
													className="modern-input"
												/>
											</div>
										</div>

										<div className="form-field-group">
											<label htmlFor="subject" className="field-label">
												<FontAwesomeIcon icon={faTag} className="field-icon" />
												<span>Subject / Topic</span>
											</label>
											<input
												type="text"
												id="subject"
												name="subject"
												placeholder="Software Engineer Role / Project Collaboration / Inquiry"
												value={formData.subject}
												onChange={handleInputChange}
												className="modern-input"
											/>
										</div>

										<div className="form-field-group">
											<div className="field-label-row">
												<label htmlFor="message" className="field-label">
													<FontAwesomeIcon icon={faCommentDots} className="field-icon" />
													<span>Your Message</span>
													<span className="required-star">*</span>
												</label>
												<span className="char-count">
													{formData.message.length} chars
												</span>
											</div>
											<textarea
												id="message"
												name="message"
												placeholder="Hi Moulitharan, I came across your portfolio and would like to discuss..."
												value={formData.message}
												onChange={handleInputChange}
												rows={5}
												required
												className="modern-textarea"
											></textarea>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className={`modern-submit-btn ${isSubmitting ? "loading" : ""}`}
										>
											{isSubmitting ? (
												<>
													<span className="btn-spinner"></span>
													<span>Preparing Message...</span>
												</>
											) : (
												<>
													<span>Send Message</span>
													<FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
												</>
											)}
										</button>
									</form>
								)}
							</div>
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
