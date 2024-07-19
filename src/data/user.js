const INFO = {
	main: {
		title: "Reactfolio by Moulitharan",
		name: "Moulitharan M",
		email: "moulitharanmuniyappan@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		twitter: "https://x.com/Mt_Mouli?t=OnTE2eZ8XzNNx6vSx71RFw&s=09",
		github: "https://github.com/Moulitharann",
		linkedin: "https://www.linkedin.com/in/moulitharan/",
		instagram: "https://www.instagram.com/mt_mouli_003?igsh=bTg3eDlmMnRwYjJp",
		//stackoverflow: "https://stackoverflow.com/",
		facebook: "https://www.facebook.com/share/VBMRj5E9bjEGwiPC/?mibextid=qi2Omg",
		leetcode: "https://leetcode.com/u/MoulitharanM/",
	},
		homepage: {
		  title: "SOFTWARE DEVELOPER",
		  description: "I am a full-stack developer specializing in Node.js. I have a proven track record in building scalable, secure, and reliable web applications using a variety of frameworks and technologies. I enjoy tackling complex problems and continuously learning new skills. My passion lies in writing high-quality code that adheres to best practices and industry standards. I'm always on the lookout for new challenges and opportunities to grow as a developer."
		},
		about: {
		  title: "I’m Moulitharan . Aspiring software developer",
		  description: "As a fresher, I have completed several projects using the MERN stack, HTML, CSS, and JavaScript. I am also familiar with Java. Over the years, I have worked on a diverse range of projects, and I take pride in the progress I've made. Many of my projects are open-source, allowing others to explore and contribute. If you're interested in my work, feel free to check out the code and share any suggestions or enhancements you have. Collaborating with others is a fantastic way to learn and grow, and I'm always open to new ideas and feedback. I am a full-stack developer familiar with frontend and MERN stack development."
		},
	  
	// articles: {
	// 	title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
	// 	description:
	// 		"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	// },

	projects: [
		{
			title: "Whatsapp Clone",
			description:
				"This project is a clone of the popular messaging application WhatsApp, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application features real-time messaging, user authentication, and chat group functionality.",
			logo: "https://th.bing.com/th/id/OIP.9485Ti-M1KbzT9K4ZShMdAHaHO?rs=1&pid=ImgDetMain",
			linkText: "View Project",
			link: "https://github.com/Moulitharann/whatsappclone_mt",
		},

		{
			title: "Task Manager",
			description:
				"The Task Manager is a web application built with React.js that allows users to efficiently manage their tasks and to-do lists. It features an intuitive and responsive user interface, enabling users to create, update, delete, and categorize tasks seamlessly. ",
			logo: "https://th.bing.com/th/id/OIP.9485Ti-M1KbzT9K4ZShMdAHaHO?rs=1&pid=ImgDetMain",
			linkText: "View Project",
			link: "https://todo-list-mt.netlify.app/",
		},

		{
			title: "Blogging App",
			description:
				"The Blogging App is a web application developed with React.js that allows users to create, edit, and manage blog posts. It features a clean and responsive interface for a seamless writing and reading experience. Users can categorize posts, add tags.",
			logo: "https://th.bing.com/th/id/OIP.9485Ti-M1KbzT9K4ZShMdAHaHO?rs=1&pid=ImgDetMain",
			linkText: "View Project",
			link: "https://github.com/Moulitharann/mt_reacct_social_media_app",
		},

		{
			title: "Docker Build",
			description:
				"Docker Build is a project focused on containerizing applications using Docker. It involves creating Dockerfiles to define the environment and dependencies required for running various applications. The project demonstrates best practices in building, testing, and deploying containerized applications.",
			logo: "data:image/png;base64,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",
			linkText: "View Project",
			link: "https://github.com/Moulitharann/73772127132_Devops_assignment_2/wiki/Docker",
		},
	],
};

export default INFO;
