const INFO = {
	main: {
		title: "Moulitharan M | Backend Software Engineer",
		name: "Moulitharan M",
		email: "mouli8376@gmail.com",
		phone: "+91 63830 54968",
		location: "Coimbatore / Mettur, Tamil Nadu, India",
		logo: "../logo.jpg",
	},

	socials: {
		github: "https://github.com/Moulitharann",
		linkedin: "https://www.linkedin.com/in/moulitharan/",
		leetcode: "https://leetcode.com/u/MoulitharanM/",
		twitter: "https://x.com/Mt_Mouli?t=OnTE2eZ8XzNNx6vSx71RFw&s=09",
		instagram: "https://www.instagram.com/mt_mouli_003?igsh=bTg3eDlmMnRwYjJp",
		facebook: "https://www.facebook.com/share/VBMRj5E9bjEGwiPC/?mibextid=qi2Omg",
	},

	homepage: {
		title: "BACKEND SOFTWARE ENGINEER",
		role: ".NET Developer & AI Enthusiast",
		description:
			"Backend Software Engineer with 1+ year of experience designing and operating REST APIs and high-volume data services on ASP.NET Core, SQL Server, and Microsoft Azure. Strong fundamentals in data structures, algorithms, and system design, with hands-on experience in stored procedure optimization, JWT/RBAC security, and building scalable backend services across C#, Python, Java, and JavaScript.",
	},

	about: {
		title: "I’m Moulitharan M — Backend Software Engineer & Full-Stack Developer",
		description:
			"Backend Software Engineer currently working at Impiger Technologies, building scalable tax computation engines and enterprise performance management systems on ASP.NET Core Web API and Azure. Experienced in developing computer-vision pipelines (FastAPI, OpenCV, DeepFace, ANPR), automation bots with Gemini AI & Cloudflare Workers, and real-time full-stack applications. Graduated in Computer Science and Business Systems from K.S. Rangasamy College of Technology with an 8.0 CGPA.",
	},

	skills: {
		languages: ["C#", "Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"],
		backend: [
			"ASP.NET Core MVC/Web API",
			"REST APIs",
			"Node.js",
			"Express.js",
			"FastAPI",
			"JWT & RBAC",
		],
		databases: [
			"SQL Server (SSMS)",
			"MySQL",
			"MongoDB",
			"Firebase",
			"SQLite",
			"Stored Procedure Optimization",
		],
		cloud: [
			"Microsoft Azure (App Service, Blob Storage)",
			"Docker",
			"Git",
			"CI/CD",
			"Google Cloud Vertex AI",
		],
		concepts: [
			"Data Structures & Algorithms",
			"System Design",
			"Multi-tenant Services",
			"Agile Development",
			"Computer Vision (OpenCV, DeepFace, ANPR)",
		],
	},

	experience: [
		{
			role: ".NET Developer",
			company: "Impiger Technologies",
			location: "Coimbatore, India",
			period: "Feb 2025 – Present",
			projects: [
				{
					name: "Xpert – Tax Computation System",
					points: [
						"Engineered a scalable tax computation engine on ASP.NET Core Web API, automating end-to-end tax workflows and eliminating manual calculation errors.",
						"Designed optimized SQL Server stored procedures for high-volume tax data retrieval, computation logic, and audit-ready report generation, improving query performance and reliability.",
						"Built secure RESTful APIs with JWT authentication for real-time tax calculation, validation, and seamless front-end integration.",
						"Mapped complex business tax rules into modular service layers, ensuring regulatory compliance, operational stability, and long-term maintainability.",
					],
				},
				{
					name: "Employee Performance Management System",
					points: [
						"Architected a full-stack, multi-role EMS using ASP.NET Core MVC and Web API for goal setting, 360° performance reviews, KPI tracking, and admin dashboards.",
						"Implemented JWT-based authentication with cookie storage and role-based access control across Admin, Manager, and Employee roles for multi-level security.",
						"Designed normalized SQL schema and stored procedures enabling fast dashboard queries, historical trend analysis, and scalable data access.",
						"Delivered an automated email notification system for review deadlines and approval workflows, reducing manual follow-up and improving process adherence.",
					],
				},
			],
		},
		{
			role: "Backend Developer Intern",
			company: "Coreverse Pvt Ltd",
			location: "Remote",
			period: "Nov 2024 – Jan 2025",
			points: [
				"Built role-based access control (RBAC) on the backend using JavaScript, securing feature access per user role across the platform.",
				"Integrated Firebase Authentication (Google OAuth) and Firestore for real-time data storage, reducing login friction and improving reliability.",
				"Developed and tested RESTful API endpoints for frontend modules; contributed in Agile sprints with regular code reviews and technical documentation.",
			],
		},
	],

	education: [
		{
			degree: "B.Tech, Computer Science and Business Systems",
			institution: "K.S. Rangasamy College of Technology, Tiruchengode",
			period: "Oct 2021 – May 2025",
			score: "CGPA: 8.0",
		},
	],

	certifications: [
		"Claude with Google Cloud's Vertex AI (Anthropic)",
		"React.js (Udemy)",
		"Salesforce Developer Cert.",
		"DSA – NPTEL (Elite+Silver)",
		"Paper Presentation: E-Learning Website with AI Chatbot",
		"Hackathon & AI/DSA Workshop Participant",
	],

	projects: [
		{
			title: "HRMS AI & ANPR Attendance System",
			category: "AI & Computer Vision",
			badge: "Featured AI Project",
			description:
				"AI-driven face-recognition attendance system with live RTSP camera ingestion and integrated ANPR (automatic number-plate recognition) for CCTV vehicle and attendance tracking (~80–90% recognition accuracy). Features a real-time React/Vite dashboard streaming base64 frames over WebSockets with role-based access.",
			tags: ["FastAPI", "OpenCV", "DeepFace", "RTSP", "ANPR", "React", "WebSockets"],
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			linkText: "View on GitHub",
			link: "https://github.com/Moulitharann",
		},
		{
			title: "Automated LinkedIn Post Generator",
			category: "AI & Automation",
			badge: "Generative AI",
			description:
				"End-to-end automation pipeline that generates and auto-publishes high-engagement LinkedIn posts. Integrates Google Gemini API for context-driven copy generation and Cloudflare Workers AI (Flux) for automated image synthesis.",
			tags: ["Python", "Gemini API", "Cloudflare Workers AI", "Flux", "Automation"],
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
			linkText: "View on GitHub",
			link: "https://github.com/Moulitharann",
		},
		{
			title: "A3 Clothing Dashboard",
			category: "Full Stack",
			badge: "E-Commerce Suite",
			description:
				"Full-stack MERN e-commerce administrative dashboard featuring real-time inventory tracking, multi-category CRUD operations, JWT-based role authentication, and automated CI/CD deployment on Render.",
			tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Render"],
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			linkText: "View on GitHub",
			link: "https://github.com/Moulitharann",
		},
		{
			title: "Instant Chat Application",
			category: "Real-time Web",
			badge: "WebSockets",
			description:
				"Real-time bi-directional messaging platform equipped with Google OAuth authentication, WebSocket-based live chat channels, typing indicators, read receipts, and persistent message history in MongoDB.",
			tags: ["React.js", "Node.js", "Firebase", "MongoDB", "Socket.io"],
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
			linkText: "View on GitHub",
			link: "https://github.com/Moulitharann",
		},
		{
			title: "Xpert Tax Computation Engine",
			category: "Enterprise Backend",
			badge: "ASP.NET Core",
			description:
				"Enterprise-grade tax calculation service built on ASP.NET Core Web API with complex business rule mapping, optimized SQL Server stored procedures, JWT authentication, and automated audit report generation.",
			tags: ["ASP.NET Core", "C#", "SQL Server", "Microsoft Azure", "REST APIs"],
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
			linkText: "View on GitHub",
			link: "https://github.com/Moulitharann",
		},
	],
};

export default INFO;
